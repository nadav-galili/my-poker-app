import "./App.css";
import Games from "./components/games";
import Navbar from "./components/navbar";
import LastGame from "./components/lastGame";
import Table from "./components/table";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main style={{ minheight: 900 }}>
        <Switch>
          <Route path="/table" exact component={Table} />
          <Route path="/lastgame" component={LastGame} />
          <Route path="/" exact component={Games} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
