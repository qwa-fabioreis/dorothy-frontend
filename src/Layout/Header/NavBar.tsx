import styles from "./NavBar.module.css";
import BotaoNavegacao from "../../components/Aprendizado/Navegacao/BotaoNavegacao";

function NavBar() {
  return (
    <nav className={styles.topnav}>
      <BotaoNavegacao rota={"/contact"}>Contato</BotaoNavegacao>
      <BotaoNavegacao rota={"/about"}>Sobre</BotaoNavegacao>
      <BotaoNavegacao rota={"/"}>Home</BotaoNavegacao>
    </nav>
  );
}

export default NavBar;
