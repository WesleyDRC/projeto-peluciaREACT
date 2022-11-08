import styles from "./Dashboard.module.css";
import useAuth from "../../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

import NavbarDashboard from '../../layout/NavbarDashboard'

function DashBoard() {
  const { SignOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <NavbarDashboard />
        <div className={styles.paginas}>
          <button
            title="SignOut"
            type="submit"
            className={styles.btn}
            onClick={() => [SignOut(), navigate("/my-account")]}
          >
            SignOut
          </button>
        </div>

      </div>
    </>
  );
}

export default DashBoard;
