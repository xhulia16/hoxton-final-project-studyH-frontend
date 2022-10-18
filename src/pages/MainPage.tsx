import { CreateExercise } from "../components/CreateExercise";
import { PupilExercises } from "../components/PupilExercises";

import { Pupil, Teacher } from "../types";

type Props = {
  userType: String;
  currentUser: Teacher | Pupil | null;
  exercises: any;
  setExercises:any
};

export function MainPage({ userType, currentUser, exercises, setExercises}: Props) {
  return (
    <>
      <section className="exercises-section">
        {userType === "teacher" ? (
          <CreateExercise currentUser={currentUser} />
        ) : (
          <PupilExercises setExercises={setExercises} exercises={exercises} />
        )}
      </section>
    </>
  );
}
