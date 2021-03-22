import "./App.css";
import Games from "./components/games";
import Navbar from "./components/navbar";
import LastGame from "./components/lastGame";
import Table from "./components/table";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main style={{ minheight: 900 }}>
        <Switch>
          <Route path="/lastgame" component={LastGame} />
          <Route path="/games" component={Games} />
          <Route path="/" component={Table} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
