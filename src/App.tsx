import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ClassMates} from "./components/Classmates";
import { Ranking } from "./components/Rankings";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <section className="exercises-section">
          <form className="question">
            <div className="teacher-info">
              <img
                className="profile-pic"
                src="https://www.looper.com/img/gallery/why-owl-house-fans-love-eda-so-much/l-intro-1649367923.jpg"
              ></img>
              <p>Teacher's name</p>
            </div>
            <p>Question of the exercise goes here</p>
            <label>
              <input
                type="radio"
                name="answer"
                value="example"
                className="custom"
              ></input>
              <span>Alternative</span>
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="example"
                className="custom"
              ></input>
              <span>Alternative</span>
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="example"
                className="custom"
              ></input>
              <span>Alternative</span>
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="example"
                className="custom"
              ></input>
              <span>Alternative</span>
            </label>
            <button>Submit</button>
          </form>
          <form className="question">
            <div className="teacher-info">
              <img
                className="profile-pic"
                src="https://www.looper.com/img/gallery/why-owl-house-fans-love-eda-so-much/l-intro-1649367923.jpg"
              ></img>
              <p>Teacher's name</p>
            </div>
            <p>Question of the exercise goes here</p>
            <label>
              <input
                type="radio"
                name="answer"
                value="example"
                className="custom"
              ></input>
              <span>Alternative</span>
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="example"
                className="custom"
              ></input>
              <span>Alternative</span>
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="example"
                className="custom"
              ></input>
              <span>Alternative</span>
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="example"
                className="custom"
              ></input>
              <span>Alternative</span>
            </label>
            <button>Submit</button>
          </form>
        </section>
        <Ranking />
        <ClassMates/>
      </main>
    </div>
  );
}

export default App;
