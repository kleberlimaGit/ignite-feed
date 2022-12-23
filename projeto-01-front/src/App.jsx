import { Header } from "./components/Header/Header"
import './global.css'

import styles from './App.module.css'
import { Card } from "./components/Card/Card"

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Card/>
        <main>
          POST
        </main>
      </div>
    </div>
  )
}

export default App
