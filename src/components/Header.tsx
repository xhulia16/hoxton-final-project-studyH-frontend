import { Link } from "react-router-dom";


export function Header({currentUser, logOutUser}){
    return(
        <header>
          <Link to="/home">
          <h3>StudyH</h3>
          </Link>
          <ul>
            {currentUser? <>
              <li><button onClick={logOutUser}>LogOut</button></li>
              <li><button>Dm</button></li>
            </>
             :
             null     
            }
            
          </ul>
        </header>
    )
}