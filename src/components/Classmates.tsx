import { Link, useNavigate } from "react-router-dom";

type Pupil = {
  name: string;
  image: string;
};
type Props = {
  pupils: Pupil[];
};
export function ClassMates({ currentUser, dmCounter, setDmCounter }) {
  const navigate=useNavigate()
  return (
    <ul className="classmates-list">
      <p>Class</p>
      {currentUser.class.pupils.map((item) => (
       
        <li className="class-pupils" onClick={()=>{
          navigate(`/dm/${item.id}`)
          setDmCounter(dmCounter+1)
        }}key={item.name}>
          <img className="profile-pic" src={item.image}></img>
          <p>{item.name}</p>
        </li>
        
      ))}
    </ul>
  );
}
