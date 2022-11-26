import styles from "../Auth.module.css";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const api = axios.create({
  baseURL: "http://localhost:5000/",
});

function PostForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { SignUp } = useAuth();
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    if (!name | !email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    const response = await SignUp(name, email, password);

    if (response) {
      setError(response);
      return;
    }

    alert("Usuário cadastrado com sucesso!");

    navigate("/");
  }

  return (
    <div className={styles.content}>
      <form onSubmit={(e) => submit(e)}>
        <div className={styles.formInput}>
          <label className={styles.labelForm}>
            <span>Nome</span>
            <input
              type="text"
              name="name"
              id="namePost"
              placeholder="Digite seu nome"
              onChange={(e) => [setName(e.target.value), setError("")]}
              value={name}
              required
            ></input>
          </label>
        </div>

        <div className={styles.formInput}>
          <label className={styles.labelForm}>
            <span>Email </span>
            <input
              type="email"
              name="email"
              id="emailPost"
              placeholder="Digite seu email"
              onChange={(e) => [setEmail(e.target.value), setError("")]}
              value={email}
              required
            ></input>
          </label>
        </div>

        <div className={styles.formInput}>
          <label className={styles.labelForm}>
            <span>Senha </span>
            <input
              type="password"
              name="password"
              id="passwordPost"
              placeholder="Digite sua senha"
              onChange={(e) => [setPassword(e.target.value), setError("")]}
              value={password}
              required
            ></input>
          </label>
        </div>

        <label className={styles.labelError}> {error} </label>
        <button type="submit" className={styles.btn}>
          Cadastrar-se
        </button>
      </form>
    </div>
  );
}

export default PostForm;
