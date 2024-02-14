import logo from "./logo.svg";
import "./App.css";
import CustomInput from "./CustomInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <CustomInput label={"Nombre"} disabled={false} />
        <CustomInput label={"Aoellido"} disabled={true}/>
      </header>
    </div>
  );
}

export default App;
