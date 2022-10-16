import { CreateExercise } from "../components/CreateExercise";
import { PupilExercises } from "../components/PupilExercises";

import { Pupil, Teacher } from "../types";

type Props = {
  userType: String;
  currentUser: Teacher | Pupil | null;
  exercises: any;
};

export function MainPage({ userType, currentUser, exercises }: Props) {
  return (
    <>
      <section className="exercises-section">
        {userType === "teacher" ? (
          <CreateExercise currentUser={currentUser} />
        ) : (
          <PupilExercises exercises={exercises} />
        )}
      </section>
    </>
  );
}
