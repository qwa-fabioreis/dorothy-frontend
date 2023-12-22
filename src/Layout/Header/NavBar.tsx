import styles from "./NavBar.module.css";
import BotaoNavegacao from "./BotaoNavegacao";
import Logo from "./Logo";

function NavBar() {
  return (
    <nav className={styles.topnav}>
      <Logo />
      <BotaoNavegacao rota={"/contact"}>Contato</BotaoNavegacao>
      <BotaoNavegacao rota={"/about"}>Sobre</BotaoNavegacao>
      <BotaoNavegacao rota={"/"}>Home</BotaoNavegacao>
    </nav>
  );
}

export default NavBar;
