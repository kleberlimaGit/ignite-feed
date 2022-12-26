import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50" />
          <div className={styles.authorInfo}>
            <strong>Tiago Silva</strong>
            <span>Gamer</span>
          </div>
        </div>

        <time
          dateTime="2022-12-25 09:00:00"
          title="25 de Dezembro de 2022 ás 9 horas"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala Galera 👏</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis error
          molestiae illum facere neque nostrum recusandae pariatur veniam
          veritatis, dignissimos dolorem accusamus architecto deserunt, sequi
          consequatur assumenda eius expedita perspiciatis.
        </p>
        <p>
          👉 <a href="#">tiago.silva/gamer-online</a>
        </p>
        <p>
          <a href="#">#projeto </a>
          <a href="#">#bootcamp </a>
          <a href="#">#react</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
