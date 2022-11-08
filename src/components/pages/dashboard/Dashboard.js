import styles from "./Dashboard.module.css";
import useAuth from "../../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import avatar from "./img/avatar.png";

import { AiOutlineEdit } from "react-icons/ai";

function DashBoard() {
  const { SignOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.boxUser}>
            <Link to="/">
              <div className={styles.peluciaAvatar}>
                <img src={avatar} />
              </div>
            </Link>
            <div className={styles.profile}>
              <p className={styles.username}> Wesley Luis </p>
              <Link to="/">
                <p>
                  <AiOutlineEdit /> Editar perfil
                </p>
              </Link>
            </div>
          </div>

          <div className={styles.listDashboard}>
            <nav className={styles.navBar}>
              <ul>
                <li>Minha Conta</li>
              </ul>
            </nav>
          </div>
        </div>

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
