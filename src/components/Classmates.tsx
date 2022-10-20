type Pupil = {
  name: string;
  image: string;
};
type Props = {
  pupils: Pupil[];
};
export function ClassMates({ currentUser }) {
  return (
    <ul className="classmates-list">
      <p>Class</p>
      {currentUser.class.pupils.map((item) => (
        <li key={item.name}>
          <img className="profile-pic" src={item.image}></img>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
