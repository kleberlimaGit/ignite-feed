import { Header } from "./components/Header/Header"
import './global.css'

import styles from './App.module.css'
import { Card } from "./components/Card/Card"
import { Post } from "./components/Post/Post"

const posts = [
  {
    id:1,
    author:{
     avatarUrl:'https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50',
     name: 'Tiago Silva',
     role: 'FIFA Gamer' 
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera 👏'},
      {type: 'paragraph', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis error molestiae illum facere neque nostrum recusandae pariatur veniam veritatis, dignissimos dolorem accusamus architecto deserunt, sequi consequatur assumenda eius expedita perspiciatis.'},
      {type: 'link', content: 'tiago.silva/gamer-online'}
    ],
    publishedAt: new Date('2022-12-25 09:00:00') 
  },
  {
    id:2,
    author:{
     avatarUrl:'https://images.unsplash.com/photo-1628501899963-43bb8e2423e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50',
     name: 'Kelly Key',
     role: 'Baba Baby Gamer' 
    },
    content: [
      {type: 'paragraph', content: 'Fala Babies 💘'}  ,
      {type: 'paragraph', content: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis error molestiae illum facere neque nostrum recusandae pariatur veniam veritatis, dignissimos dolorem accusamus architecto deserunt, sequi consequatur assumenda eius expedita perspiciatis.'},
      {type: 'link', content: 'Kellykey/gamer-online'}
    ],
    publishedAt: new Date('2022-12-25 15:00:00') 
  },

]

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Card/>
        <main>
          {posts.map(post => {
            return (
              <Post
                  key = {post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
