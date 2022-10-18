import { Exercises } from "../types";
import { Exercise } from "../components/Exercise";
import { Link } from "react-router-dom";
import { useRef } from "react";
type Props={
  exercises: Exercises
}

export function PupilExercises({ exercises }) {
  const ref = useRef(null);

  if (exercises === null) {
    return <h1>Loading...</h1>;
  }



  return (
    <>
      {exercises.reverse().map((item) => (
        <form 
          className="question"
          onSubmit={(event) => {
            event.preventDefault();
            console.log(event.target.name.value)

            const button=document.querySelector(`.${item.alternative1}`)
            if(button){
              button.disabled=true;
            }
            
           
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
          {/* {item.answered? 
          <>
          <button disabled={true}>Submit</button>
          <Link to={`/exercise/${item.id}`}>
          <h2>See results</h2>
          </Link>
          </>
          : 
         
          } */}
           <button className={item.alternative1}>Submit</button>
        </form>
      ))}
    </>
  );
}
