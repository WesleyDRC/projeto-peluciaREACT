import styles from "./Dashboard.module.css";

import { useNavigate } from "react-router-dom";

import NavbarDashboard from '../../layout/NavbarDashboard';

import MyAccount from '../MyAccount';
import Address from '../Address';
import Password from '../Password'

import useAuth from "../../../hooks/useAuth";
import useDashboard from "../../../hooks/useDashboard";

function DashBoard() {
  const { SignOut } = useAuth();
  const { selectedProfile, selectedAdress, selectedChangePassword } = useDashboard();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbarDashboard}>
          <NavbarDashboard />
        </div>

        <div className={styles.pages}>
          {selectedProfile && <MyAccount />}
          {selectedAdress && <Address />}
          {selectedChangePassword && <Password />}
          {/* <button
            title="SignOut"
            type="submit"
            className={styles.btn}
            onClick={() => [SignOut(), navigate("/my-account")]}
          >
            SignOut
          </button> */}
        </div>

      </div>
    </>
  );
}

export default DashBoard;
