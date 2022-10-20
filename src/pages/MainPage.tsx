import { CreateExercise } from "../components/CreateExercise";
import { PupilExercises } from "../components/PupilExercises";

import { Pupil, Teacher } from "../types";

type Props = {
  userType: String;
  currentUser: Teacher | Pupil | null;
  exercises: any;
  setExercises:any;
  setPupils:any
  pupilRanking:any
};

export function MainPage({ userType, currentUser, exercises, setExercises, setPupils, pupilRanking, counter, setCounter}) {
  return (
    <>
      <section className="exercises-section">
        {userType === "teacher" ? (
          <CreateExercise currentUser={currentUser} />
        ) : (
          <PupilExercises 
          setPupils={setPupils}
          setExercises={setExercises} 
          currentUser={currentUser} 
          exercises={exercises} 
          pupilRanking={pupilRanking}
          setCounter={setCounter}
          counter={counter}
          />
        )}
        <h3>No more exercises to solve yet...</h3>
      </section>
    </>
  );
}
