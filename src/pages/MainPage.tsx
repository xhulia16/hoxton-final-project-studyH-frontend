type Props={
  userType: String
}

export function MainPage({userType}:Props){
    return(
        <>
        <section className="exercises-section">
        {userType==="teacher"? 
        <form className="teacher">
          <h2>Post a question</h2>
          <textarea placeholder="question"></textarea>
          <input placeholder="correct answer"></input>
          <input placeholder="alternative 1"></input>
          <input placeholder="alternative 2"></input>
          <input placeholder="alternative 3"></input>
          <button>Submit</button>
        </form>:
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
        }
      </section>  
      </>
    )
}