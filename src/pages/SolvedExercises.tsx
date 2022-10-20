export function SolvedExercises({ answers, currentUser, setAnswers }) {
  return (
    <section className="solved-exercises">
      <h2>Solved Exercises:</h2>
      {answers.reverse().map((item) => (
        <div key={item.id} className="single-exercise">
          <div className="exercise-details">
            <div className="teacher-info  answers">
              <img
                src={item.exercise.teacher.image}
                className="profile-pic"
              ></img>
              <p>{item.exercise.teacher.name}</p>
            </div>
            <h4>{item.exercise.exercise}</h4>
            <p className="correct">Correct answer: {item.exercise.answer}</p>
            <p
              className={
                item.exercise.answer === item.answer ? "correct" : "wrong"
              }
            >
              Your answer: {item.answer}
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                fetch(`http://localhost:5000/comments`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }, 
                  body: JSON.stringify({
                    exerciseId: item.exerciseId, 
                    pupilId: currentUser.id, 
                    comment: event.target.comment.value
                  })
                })
                .then(resp=>resp.json())
                .then(data=>{
                
                  setAnswers(data)
                })
              }}
            >
              <input name="comment" placeholder="ask a question"></input>
              <button>Submit</button>
            </form>
          </div>
          <ul>
            <h3>Comments</h3>
            {item.exercise.comments.reverse().map((comment) => (
              <li key={comment.id}>
                <div className="teacher-info comment">
                  <img className="profile-pic" src={comment.pupil.image}></img>
                  <h4>{comment.pupil.name}</h4>
                  <p className="pupil-comment">{comment.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {answers.length === 0 ? (
        <h2>You haven't answered any questions yet...</h2>
      ) : null}
    </section>
  );
}

