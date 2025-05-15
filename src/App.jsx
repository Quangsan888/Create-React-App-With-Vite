import Student from "./Student.jsx";
import "./index.css";
function App() {
  return (
    <div>
      <Student name="Quangsan" age={21} isStudent={true} />
      <Student name="Nguyen" age={22} isStudent={false} />
      <Student name="Quangsan" age={23} isStudent={false} />
      <Student name="Quangsan" age={21} isStudent={true} />
      <Student />
    </div>
  );
}

export default App;
