import styles from "./NavBar.module.css";
import BotaoNavegacao from "./BotaoNavegacao";

function NavBar() {
  return (
    <nav className={styles.topnav}>
      <img src="src/assets/react.svg" alt="React" />
      <BotaoNavegacao rota={"/contact"}>Contato</BotaoNavegacao>
      <BotaoNavegacao rota={"/about"}>Sobre</BotaoNavegacao>
      <BotaoNavegacao rota={"/"}>Home</BotaoNavegacao>
    </nav>
  );
}

export default NavBar;
