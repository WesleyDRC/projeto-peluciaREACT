import { useEffect } from "react";

import styles from "./MyAccount.module.css";

import avatar from "../layout/img/avatar.png";

import NavbarDashboard from "../layout/NavbarDashboard";

import useDashboard from "../../hooks/useDashboard";

export default function MyAccount() {
  const { setMyAccount, setSelectedProfile } = useDashboard();

  useEffect(() => {
    setMyAccount(true);
    setSelectedProfile(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navbarDashboard}>
        <NavbarDashboard />
      </div>

      <div className={styles.pages}>
        <div className={styles.myAccount}>
          <div>
            <h1 className={styles.title}> Meu Perfil </h1>
            <p className={styles.description}>Gerencie sua conta</p>
          </div>

          <div className={styles.profile}>
            <div className={styles.form}>
              <form className={styles.formUser}>
                <div className={styles.item}>
                  <div className={styles.tag}>Nome de usuário</div>
                  <div className={styles.contentTag}>wesleydrc</div>
                </div>

                <div className={styles.item}>
                  <div className={styles.tag}>CPF</div>
                  <div className={styles.contentTag}>999.999.918.82</div>
                </div>

                <div className={styles.item}>
                  <div className={styles.tag}>Nome</div>
                  <div className={styles.contentTag}>
                    <input
                      defaultValue="Wesley Luis"
                      className={styles.inputForm}
                    ></input>
                  </div>
                </div>

                <div className={styles.item}>
                  <div className={styles.tag}>Email</div>
                  <div className={styles.contentTag}>
                    wesleymiranda04b@gmail.com
                  </div>
                </div>

                <div className={styles.item}>
                  <div className={styles.tag}>Número de telefone</div>
                  <div className={styles.contentTag}>(12) 4002-8992</div>
                </div>

                <div className={styles.item}>
                  <button type="button" className={styles.btn}>
                    GRAVAR
                  </button>
                </div>
              </form>
            </div>

            <div className={styles.skinUser}>
              <div className={styles.plushSkin}>
                <img src={avatar} alt="imagem de perfil" />
              </div>
              <div>
                <label htmlFor="sendImage" className={styles.labelSendImage}>
                  Selecionar a imagem
                </label>
                <input
                  id="sendImage"
                  className={styles.inputSendImage}
                  type="file"
                  accept=".jpg, .jpeg, .png"
                />
                <div>Tamanho do arquivo: Máximo 1 MB</div>
                <div>Extensão do arquivo: .JPEG, .PNG</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
