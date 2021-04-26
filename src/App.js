import "./App.css";
import Games from "./components/games";
import Navbar from "./components/navbar";
import LastGame from "./components/lastGame";
import Table from "./components/table";
import About from "./components/about";
import Footer from "./components/footer";
import Stats from "./components/stats";
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
        <HashRouter>
          <Route path="/lastgame" component={LastGame} />
          <Route path="/games" component={Games} />
          <Route path="/about" component={About} />
          <Route path="/statistics" component={Stats} />
          <Route exact path="/" component={Table} />
        </HashRouter>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
