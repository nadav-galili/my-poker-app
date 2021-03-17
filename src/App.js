import "./App.css";
import Games from "./components/games";
import Navbar from "./components/navbar";
import LastGame from "./components/lastGame";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Games />
      <LastGame />
    </div>
  );
}

export default App;
