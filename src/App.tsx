import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ClassMates} from "./components/Classmates";
import { Ranking } from "./components/Rankings";
import { Navigate, Route, Routes, useNavigate} from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { PageNotFound } from "./pages/PageNotFound";
import { LogIn } from "./pages/LogInPage";
import { Pupil, Teacher } from "./types";

function App() {
  const [currentUser, setCurrentUser]=useState<Teacher|Pupil|null>(null)
  const [userType, setUserType]=useState<String>("")
  
  let navigate= useNavigate()

  function logInUser(data: any){
    setCurrentUser(data.user)
    setUserType(localStorage.user)
    localStorage.token=data.token
    navigate("home")
  }

  function logOutUser(){
    setCurrentUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate("/log-in")
  }

  useEffect(() => {
    if (localStorage.token) {
      if(localStorage.user==="teacher"){
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
          })
      }
      
      else(
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
          })
      )
        
    }
  }, []);
   
  return (
    <div className="App">
      <main>
        
        <Header currentUser={currentUser} logOutUser={logOutUser}/>
        <Routes>
        <Route index element={<Navigate to='/home' />} />
        <Route path='/home' element={<MainPage userType={userType}/>} />
        <Route path='/log-in' element={<LogIn logInUser={logInUser}/>} />
        <Route path='*' element={<PageNotFound/>} />
        </Routes>
        {currentUser? <>
          <Ranking />
        <ClassMates/>
        </>:
        null
         }
       
      </main>
    </div>
  );
}

export default App;
