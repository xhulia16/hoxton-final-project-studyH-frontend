export function Ranking({ rankings, currentUser, userType}) {
  let rank = 0;
  return (
    <section className="ranking-section">
      <input className="search" placeholder="Search Question"></input>
      <ul>
        <h3>Highest Scores</h3>
        {rankings.map((item) => (
          <li className="pupil-rank">
            <div className="ranking_pupil-details">
            <p className="ranking">#{(rank = rank + 1)}</p>
            <img className="profile-pic" src={item.image}></img>
            <p>{item.name}</p>
            </div>
            <p className="score">Points: {item.score}</p>
          </li>
        ))}
      </ul>
      {userType==="pupil"?
      <div className="current-pupil_score">
      <p>Hello 👋 {currentUser.name}</p>
      <h4>This is your current score: {currentUser.score} points</h4>
    </div>:
    null
    }
      
    </section>
  );
}
