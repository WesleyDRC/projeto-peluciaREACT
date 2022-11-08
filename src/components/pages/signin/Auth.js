import styles from "./Auth.module.css";
import React, { useState } from "react";
import PostForm from "./register/PostForm";
import GetForm from "./login/GetForm";

function Auth() {
  const [form, setForm] = useState(true);

  let handleClick = () => {
    setForm(!form);
  };

  return (
    <div className={styles.auth}>
      <p className={styles.titleForm}>
        <span
          className={form ? styles.authUserActive : styles.authUserDisabled}
          onClick={!form ? handleClick : null}
        >
          Entrar
        </span>
        /
        <span
          className={
            !form ? styles.registerUserActive : styles.registerUserDisabled
          }
          onClick={form ? handleClick : null}
        >
          Cadastrar-se
        </span>
      </p>
      <ul>
        <li className={form ? styles.loginActive : styles.loginDisabled}>
          <div className={styles.containerForm}>
            <GetForm />
          </div>
        </li>

        <li
          className={
            !form ? styles.registerFormActive : styles.registerFormDisabled
          }
        >
          <div className={styles.containerForm}>
            <PostForm />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Auth;
