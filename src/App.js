import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (massege, type) => {
    setAlert({ msg: massege, type: type });
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }
  };

  return (
    <>
      <Router>
        <Navbar title={"Anupama"} about={"About"} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode} className="container" />
          </Route>
          <Route path="/home">
            <TextField mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route path="/">
            <div>No match route</div>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
