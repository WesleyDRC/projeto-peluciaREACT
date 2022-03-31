import styles from "./WhatsApp.module.css";
import { BsWhatsapp } from "react-icons/bs";
function WhatsApp() {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=5512988357075"
        target="_blank"
        rel="noreferrer" 
        className={styles.float}
      >
        <BsWhatsapp className={styles.my_float} />
      </a>
    </div>
  );
}

export default WhatsApp;
