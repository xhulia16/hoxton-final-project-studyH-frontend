type Pupil={
  name:string
  image:string
}
type Props={
  pupils: Pupil[]
}
export function ClassMates({pupils}:Props) {
  return (
    <ul className="classmates-list">
      <p>Class</p>
      {pupils.map((item)=>(
        <li>
        <img className="profile-pic" src={item.image}></img>
        <p>{item.name}</p>
      </li>
      ))}
      
    </ul>
  );
}
