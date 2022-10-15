export function LogIn({logInUser}) {
  return (

    <div className="logIn-page">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const user = {
            email: event.target.email.value,
            password: event.target.password.value
          };
          console.log(event.target.answer.value);

          if (event.target.answer.value === "teacher") {
             fetch(`http://localhost:5000/sign-in/teacher`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user)
            })
              .then((resp) => resp.json())
              .then((data) => {
                if (data.error) {
                  alert(data.error);
                } else {
                  logInUser(data);
                }
            });
            localStorage.user="teacher"
        }
    else{
        fetch(`http://localhost:5000/sign-in/pupil`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user)
            })
              .then((resp) => resp.json())
              .then((data) => {
                if (data.error) {
                  alert(data.error);
                } else {
                  logInUser(data);
                }
            });
            localStorage.user="pupil"
    }
    }}

    
        className="pupil-logIn">
        <h2 className="title">LOGIN FORM</h2>
        <div className="logIn-question">
          <p>Login as:</p>
          <label>
            <input
              type="radio"
              name="answer"
              value="teacher"
              className="custom"
            ></input>
            <span>Teacher</span>
          </label>
          <label>
            <input
              type="radio"
              name="answer"
              value="pupil"
              className="custom"
            ></input>
            <span>Pupil</span>
          </label>
        </div>

        <p>Please enter your email and password</p>
        <label>
          <input placeholder="email" name="email" required></input>
        </label>
        <label>
          <input
            placeholder="password"
            type="password"
            name="password"
            required
          ></input>
        </label>
        <button>LogIn</button>
      </form>
    </div>
  );
}
