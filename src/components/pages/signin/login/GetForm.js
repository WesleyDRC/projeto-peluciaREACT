import styles from "../Auth.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

function GetForm() {
  const { SignIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }
    const response = await SignIn(email, password);
    if (response) {
      setError(response);
      return;
    }
    navigate("");
  }

  return (
    <div className={styles.content}>
      <form onSubmit={(e) => submit(e)}>
        <div className={styles.formInput}>
          <label className={styles.labelForm}>
            <span>Email</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email"
              className={styles.formControl}
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            ></input>
          </label>
        </div>
        <div className={styles.formInput}>
          <label className={styles.labelForm}>
            <span>Senha </span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              className={styles.formControl}
              value={password}
              onChange={(e) => [setPassword(e.target.value), setError("")]}
            ></input>
          </label>
        </div>

        <label className={styles.labelError}> {error} </label>
        <button type="submit" className={styles.btn}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default GetForm;
