import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="App">
      <main>
        <header>
          <h3>StudyH</h3>
          <ul>
            <li>LogIn</li>
            <button>DMS</button>
          </ul>
        </header>
        <section className="exercises-section">
          <h4>Exercises section</h4>
        </section>
        <section className="ranking-section">
          <input className="search" placeholder="Search Question"></input>
          <ul>
          students ranking
          <li>Student1 bananan scores</li>
          <li>Student2 bananan scores</li>
          <li>Student3 bananan scores</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
