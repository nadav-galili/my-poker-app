import "./App.css";
import Games from "./components/games";
import Navbar from "./components/navbar";
import LastGame from "./components/lastGame";
import Table from "./components/table";
import Footer from "./components/footer";
import { Switch, Route, HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <header>
        <ToastContainer />
        <Navbar />
      </header>

      <main style={{ minHeight: 900 }}>
        <Switch>
          <Route path="/lastgame" component={LastGame} />
          <Route path="/games" component={Games} />
          <Route path="/" component={Table} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
