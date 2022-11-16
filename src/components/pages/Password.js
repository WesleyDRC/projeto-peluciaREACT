import { useEffect } from "react";

import NavbarDashboard from "../layout/NavbarDashboard";

import styles from "./Password.module.css";

import useDashboard from "../../hooks/useDashboard";

export default function Password() {
  const { selectedItemDashboard, triggerListProfile} = useDashboard();

  useEffect(() => {
    triggerListProfile()
    selectedItemDashboard(items.PASSWORD)
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navbarDashboard}>
        <NavbarDashboard />
      </div>

      <div className={styles.pages}>
        <div className={styles.password}>
          <div className={styles.section}>
            <h1 className={styles.title}> Trocar senha </h1>
            <p className={styles.description}>
              Para a segurança da sua conta, não compartilhe sua senha com mais
              ninguém
            </p>
          </div>

          <div className={styles.changePasswordContainer}>
            <form className={styles.changePasswordForm}>
              <div className={styles.item}>
                <div className={styles.tag}>Nova Senha</div>
                <div className={styles.contentTag}>
                  <input type="password" className={styles.inputForm}></input>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.tag}>Confirme a senha</div>
                <div className={styles.contentTag}>
                  <input type="password" className={styles.inputForm}></input>
                </div>
              </div>

              <div className={styles.item}>
                <button type="button" className={styles.btn}>
                  GRAVAR
                </button>
              </div>
            </form>

            <div className={styles.takeUpSpace}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
