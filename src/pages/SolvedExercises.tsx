export function SolvedExercises({ answers }) {
  return (
    <section className="solved-exercises">
      <h2>Solved Exercises:</h2>
      {answers.reverse().map((item) => (
        <div className="single-exercise">
          <div className="exercise-details">
            <div className="teacher-info">
              <img src={item.exercise.teacher.image} className="profile-pic"></img>
              <h3>{item.exercise.teacher.name}</h3>
            </div>
            <p>{item.exercise.exercise}</p>
            <h4>Correct answer:  {item.exercise.answer}</h4>
            <h4>Your answer: {item.answer}</h4>
            <input placeholder="ask a question"></input>
          </div>
          <ul>
            <li>
              <div className="teacher-info comment">
                <img className="profile-pic"></img>
                <h4>teacher name</h4>
                <p>comment here</p>
              </div>
            </li>
            <li>list of comments</li>
            <li>list of comments</li>
          </ul>
        </div>
      ))}
      <h2>You haven't answered any questions yet...</h2>
    </section>
  );
}
//fetching all the exercises in the answer section.
// getting the answer from user
