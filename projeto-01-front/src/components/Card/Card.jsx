import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Card.module.css";

export function Card() {
  return (
    <aside className={styles.card}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/54951528?v=4"/>
        <strong>Kleber Lima</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
