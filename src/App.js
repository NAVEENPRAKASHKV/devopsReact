import logo from "./logo.svg";
import "./App.css";
import PersonalDetails from "./PersonalDetails";

function App() {
  return (
    <div className="App">
      <h1 className="main-heading">Hello from Pallavi Suresh</h1>
      <h2 style={{ color: "violet" }}>DevOps Engineer</h2>
      <h3 style={{ color: "blueviolet" }}> My-First-React-Application</h3>
      <img className="imag" src="http://localhost:3000/logo512.png" alt="img" />
      <PersonalDetails />
    </div>
  );
}

export default App;
