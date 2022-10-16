import { Pupil, Teacher } from "../types";

type Props={
  currentUser: Pupil| Teacher | null
}

export function CreateExercise({currentUser}: Props){
  if (currentUser === null) {
    return <h1>Loading...</h1>;
  }
    return(
        <form
            className="teacher"
            onSubmit={(event) => {
              event.preventDefault();
              let newExercise = {
                question: event.target.question.value,
                answer: event.target.answer.value,
                alternative1: event.target.alternative1.value,
                alternative2: event.target.alternative2.value,
                alternative3: event.target.alternative3.value,
              };
              console.log(newExercise);

              fetch("http://localhost:5000/exercises", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  exercise: newExercise.question,
                  answer: newExercise.answer,
                  alternative1: newExercise.alternative1,
                  alternative2: newExercise.alternative2,
                  alternative3: newExercise.alternative3,
                  alternative4: newExercise.answer,
                  teacherId: currentUser.id,
                  classId: currentUser.classId,
                }),
              });
            }}
          >
            <h2>Post a question</h2>
            <textarea placeholder="question" name="question"></textarea>
            <input placeholder="correct answer" name="answer"></input>
            <input placeholder="alternative 1" name="alternative1"></input>
            <input placeholder="alternative 2" name="alternative2"></input>
            <input placeholder="alternative 3" name="alternative3"></input>
            <button>Submit</button>
          </form>
    )
}