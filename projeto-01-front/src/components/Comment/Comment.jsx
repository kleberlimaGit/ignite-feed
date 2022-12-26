import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1628501899963-43bb8e2423e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kelly Key</strong>
              <time
                dateTime="2022-12-25 20:00:00"
                title="25 de Dezembro de 2022 ás 20 horas"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
                <Trash size={22}/>
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>

        <footer>
            <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
