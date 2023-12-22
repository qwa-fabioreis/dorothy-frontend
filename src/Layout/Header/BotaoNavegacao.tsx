import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styles from "./BotaoNavegacao.module.css"

function BotaoNavegacao(props: PropsWithChildren<BotaoNavProps>) {
  return (
    <div className={styles.btn_nav}>
      <Link to={props.rota}>{props.children}</Link>
    </div>
  );
}

type BotaoNavProps = {
  rota: string;
};

export default BotaoNavegacao;

// passando props e childrens no componente
// https://blog.logrocket.com/react-children-prop-typescript/
