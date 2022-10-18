import { Link } from "react-router-dom";


export function Header({currentUser, logOutUser}){
    return(
        <header>
          <Link to="/home">
          <h3>StudyH</h3>
          </Link>
          <ul>
            {currentUser? <>
            <Link to="/solved-exercises">
              <li><button>See Answers</button></li>
              </Link>
              <li><button>Dm</button></li>
              <li><button onClick={logOutUser}>LogOut</button></li>
            </>
             :
             null     
            }
            
          </ul>
        </header>
    )
}