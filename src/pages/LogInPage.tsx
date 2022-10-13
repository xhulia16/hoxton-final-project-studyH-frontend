export function LogIn() {
  return (
    <div className="logIn-page">
      <form className="pupil-logIn">
        <h2 className="title">LOGIN FORM</h2>
        <div className="logIn-question">
          <p>Login as:</p>
          <label>
            <input
              type="radio"
              name="answer"
              value="example"
              className="custom"
            ></input>
            <span>Teacher</span>
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value="example"
              className="custom"
            ></input>
            <span>Pupil</span>
          </label>
        </div>

<p>Please enter your email and password</p>
        <label>
          <input placeholder="email" name="email"></input>
        </label>
        <label>
          <input placeholder="password" type="password" name="password"></input>
        </label>
        <button>LogIn</button>
      </form>
    </div>
  );
}
