import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ClassMates} from "./components/Classmates";
import { Ranking } from "./components/Rankings";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { PageNotFound } from "./pages/PageNotFound";
import { LogIn } from "./pages/LogInPage";

function App() {
  const [currentUser, setCurrentUser]=useState()
  return (
    <div className="App">
      <main>
        
        <Header/>
        <Routes>
        <Route index element={<Navigate to='/home' />} />
        <Route path='/home' element={<MainPage/>} />
        <Route path='/log-in' element={<LogIn/>} />
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
