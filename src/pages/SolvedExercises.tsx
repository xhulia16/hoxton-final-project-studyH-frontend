export function SolvedExercises(){
    return(
        <section className="solved-exercises">
            <h2>Solved Exercises:</h2>
            <div className="single-exercise">
                <div className="exercise-details">
                <div className="teacher-info">
            <img className="profile-pic" ></img>
            <h3>teacher name</h3>
          </div>
                <p>Here is the question</p>
                <h4>Correct answer: </h4>
                <h4>Your answer: </h4>
                <input placeholder="ask a question"></input>
                </div>
                <ul>
                <li><div className="teacher-info comment">
            <img className="profile-pic" ></img>
            <h4>teacher name</h4>
            <p>comment here</p>
          </div></li>
                <li>list of comments</li>
                <li>list of comments</li>
                </ul>
            </div>
        </section>
    )
}
//fetching all the exercises in the answer section. 
// getting the answer from user 
