import logo from './logo.svg';
import './App.css';
const name = "Antriksh"
const x = true;

function App() {
  return (
  
    <div className="App">
      <h1>hello world</h1>
      <h1>{name}</h1>
      <h2>{55+6}</h2>
      <h2> {x ? "Yes" : "No"}</h2>
    </div>
  );
}

export default App;
