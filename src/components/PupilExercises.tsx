import { Exercises } from "../types";
import { Exercise } from "../components/Exercise";
import { useRef } from "react";
type Props = {
  exercises: Exercises;
};

export function PupilExercises({
  exercises,
  currentUser,
  setExercises,
  pupilRanking,
  setPupils,
  counter,
  setCounter
}) {


  if (exercises === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {exercises.reverse().map((item) => (
        <form
          key={item.id}
          className="question"
          onSubmit={(event) => {
            event.preventDefault();
            console.log(event.target.name.value);

            fetch("http://localhost:5000/answers", {
              method: "POST",
              headers: {
                "Content-type": "Application/json",
              },
              body: JSON.stringify({
                answer: event.target.name.value,
                pupilId: currentUser.id,
                exerciseId: item.id,
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                const { exercises, pupils } = data;
                setExercises(exercises);
              })

              .then((score) => {
                fetch(`http://localhost:5000/pupil/${currentUser.id}`, {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "Application/json",
                  },
                  body: JSON.stringify({
                    score: pupilRanking + 1,
                    exerciseId: item.id,
                  }),
                })
                  .then((resp) => resp.json())
                  .then((data) => {
                    const { pupils } = data;
                    setPupils(pupils);
                    setCounter(counter+1)
                  });
              });
          }}
        
        >
          <div className="teacher-info">
            <img className="profile-pic" src={item.teacher.image}></img>
            <h4>{item.teacher.name}</h4>
          </div>
          <Exercise
          item={item}
            question={item.exercise}
            options={[
              item.alternative1,
              item.alternative2,
              item.alternative3,
              item.alternative4,
            ]}
            name="name"
          />
          <button
            disabled={true}
            id={item.alternative1.toString()}
            type="submit"
          >
            Submit
          </button>
        </form>
      ))}
    </>
  );
}
