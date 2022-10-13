

export function Header({currentUser, logOutUser}){
    return(
        <header>
          <h3>StudyH</h3>
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