import styles from "./Dashboard.module.css";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const { SignOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1> Minha conta </h1>
        </div>
        <p>Você está lógado como:  </p>

        <button
          title="SignOut"
          type="submit"
          className={styles.btn}
          onClick={() => [SignOut(), navigate("/my-account")]}
        >
          SignOut
        </button>
      </div>
    </>
  );
}

export default DashBoard;
