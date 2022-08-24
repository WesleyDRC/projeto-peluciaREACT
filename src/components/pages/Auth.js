import styles from "./Auth.module.css";
import React, { useState } from "react";

function Auth() {
  const [form, setForm] = useState(true);
  let handleClick = () => {
    setForm(!form);
  };

  return (
    <div className={styles.auth}>
      <h1 className={styles.titleForm}>
        <span
          className={form ? styles.authUserActive : styles.authUserDisabled}
          onClick={!form ? handleClick : ""}
        >
          Entrar
        </span>
        /
        <span
          className={
            !form ? styles.registerUserActive : styles.registerUserDisabled
          }
          onClick={form ? handleClick : ""}
        >
          Cadastrar-se
        </span>
      </h1>
      <ul>
        <li className={form ? styles.loginActive : styles.loginDisabled}>
          <form action="" method="post">
            <label className={styles.labelForm}>
              Email
              <input
                type="email"
                name="email"
                id="email"
                className={styles.formInput}
                required
              ></input>
            </label>

            <label className={styles.labelForm}>
              Senha
              <input
                type="password"
                name="password"
                id="password"
                className={styles.formInput}
                required
              ></input>
            </label>

            <button type="submit" className={styles.btn}>
              Entrar
            </button>
          </form>
        </li>
        <li
          className={
            !form ? styles.registerFormActive : styles.registerFormDisabled
          }
        >
          <form action="" method="post">
            <label className={styles.labelForm}>
              Nome
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome"
                className={styles.formInput}
                required
              ></input>
            </label>

            <label className={styles.labelForm}>
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
                className={styles.formInput}
                required
              ></input>
            </label>

            <label className={styles.labelForm}>
              Senha
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
                className={styles.formInput}
                required
              ></input>
            </label>
            <button type="submit" className={styles.btn}>
              Cadastrar-se
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
}

export default Auth;
