import { CreateExercise } from "../components/CreateExercise";
import { PupilExercises } from "../components/PupilExercises";

import { Pupil, Teacher } from "../types";

type Props = {
  userType: String;
  currentUser: Teacher | Pupil | null;
  exercises: any;
  setExercises:any;
  setRankings: any;
};

export function MainPage({ userType, currentUser, exercises, setExercises, setRankings}: Props) {
  return (
    <>
      <section className="exercises-section">
        {userType === "teacher" ? (
          <CreateExercise currentUser={currentUser} />
        ) : (
          <PupilExercises setRankings={setRankings} setExercises={setExercises} currentUser={currentUser} exercises={exercises} />
        )}
        <h3>No more exercises to solve yet...</h3>
      </section>
    </>
  );
}
