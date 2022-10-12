export function LogIn(){
    return( 
        <div className="logIn-page">
            <form className="pupil-logIn">
                <h2>Log in as a pupil</h2>
                <label>
                    email
                <input></input>
                </label>
                
            </form>
            <form className="teacher-logIn">
                <h2>Log in as a teacher</h2>
            </form>
        </div>
    )
}