import profilePric from "./assets/react.svg";
import "./index.css";
function Card() {
  return (
    <div className="card">
      <div>
        <img src={profilePric} alt="react" />
        <h2>Quang san</h2>
        <p>Học code react</p>
        <p>rất mệt</p>
      </div>
    </div>
  );
}
export default Card;
