import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ClassMates } from "./components/Classmates";
import { Ranking } from "./components/Rankings";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { PageNotFound } from "./pages/PageNotFound";
import { LogIn } from "./pages/LogInPage";
import { Pupil, Teacher } from "./types";
import { SolvedExercises } from "./pages/SolvedExercises";

function App() {
  const [currentUser, setCurrentUser] = useState<Teacher | Pupil | null>(null);
  const [userType, setUserType] = useState<String>("");
  const [exercises, setExercises] = useState([]);
  const [pupils, setPupils] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [pupilRanking, setPupilRanking] = useState('');
  const [errors, setErrors]=useState([])

  window.exercises = exercises;
  window.answers = answers;
  window.pupilRanking=pupilRanking;

  let navigate = useNavigate();

  function logInUser(data: any) {
    setCurrentUser(data.user);
    setUserType(localStorage.user);
    localStorage.token = data.token;
    navigate("/home");
  }

  function logOutUser() {
    setCurrentUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/log-in");
  }

  useEffect(() => {
    if (localStorage.token) {
      if (localStorage.user === "teacher") {
        fetch(`http://localhost:5000/validate/teacher`, {
          headers: {
            Authorization: localStorage.token,
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            if (data.error) {
              alert(data.error);
            } else {
              logInUser(data);
            }
          });
      } else
        fetch(`http://localhost:5000/validate/pupil`, {
          headers: {
            Authorization: localStorage.token,
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            if (data.error) {
              alert(data.error);
            } else {
              logInUser(data);
            }
          });
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      if (userType === "pupil") {
        fetch(`http://localhost:5000/class/${currentUser.id}`)
          .then((resp) => resp.json())
          .then((data) => {
            const { exercises, pupils } = data;
            setExercises(exercises);
            setPupils(pupils);
          });
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      if (userType === "pupil") {
        fetch(`http://localhost:5000/answers/${currentUser.id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setAnswers(data);
          });
        fetch(`http://localhost:5000/scores-students/${currentUser.classId}`)
          .then((resp) => resp.json())
          .then((data) => {
            const { pupils } = data;
            setRankings(pupils);
          });
      }
    }
  }, [exercises]);

  useEffect(() => {
    if (currentUser && userType === "pupil") {
      fetch(`http://localhost:5000/pupil/score/${currentUser.id}`)
        .then((resp) => resp.json())
        .then((data) => {
          const {score}=data
          setPupilRanking(score)
        });
    }
  }, [exercises]);

  return (
    <div className="App">
      <main>
        <Header currentUser={currentUser} logOutUser={logOutUser} />
        <Routes>
          {currentUser ? (
            <>
              <Route index element={<Navigate to="/home" />} />
              <Route
                path="/home"
                element={
                  <MainPage
                    userType={userType}
                    currentUser={currentUser}
                    exercises={exercises}
                    setExercises={setExercises}
                    setRankings={setRankings}
                    pupilRanking={pupilRanking}
                  />
                }
              />
              <Route
                path="/solved-exercises"
                element={<SolvedExercises answers={answers} />}
              />
            </>
          ) : (
            <>
              <Route index element={<Navigate to="/log-in" />} />
              <Route path="/log-in" element={<LogIn logInUser={logInUser} />} />
            </>
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {currentUser ? (
          <>
            <Ranking
              rankings={rankings}
              pupilRanking={pupilRanking}
              userType={userType}
              currentUser={currentUser}
            />
            <ClassMates pupils={pupils} />
          </>
        ) : null}
      </main>
    </div>
  );
}

export default App;
