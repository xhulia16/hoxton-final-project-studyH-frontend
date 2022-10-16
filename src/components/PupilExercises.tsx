import { Exercise } from "../components/Exercise";

export function PupilExercises({ exercises }) {
  if (exercises === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {exercises.map((item) => (
        <form
          className="question"
          onSubmit={(event) => {
            event.preventDefault();
            console.log(event.target.name.value);
          }}
        >
          <div className="teacher-info">
            <img className="profile-pic" src={item.teacher.image}></img>
            <h4>{item.teacher.name}</h4>
          </div>
          <Exercise
            question={item.exercise}
            options={[
              item.alternative1,
              item.alternative2,
              item.alternative3,
              item.alternative4,
            ]}
            name="name"
          />
          <button>Submit</button>
        </form>
      ))}
    </>
  );
}
