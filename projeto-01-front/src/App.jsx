import { Header } from "./components/Header/Header"
import './global.css'

import styles from './App.module.css'
import { Card } from "./components/Card/Card"
import { Post } from "./components/Post/Post"

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Card/>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
