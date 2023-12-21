import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <hr />
      <div>Footer</div>
      <ul className={styles.social_midia}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
    </>
  );
}

export default Footer;
