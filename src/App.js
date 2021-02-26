import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";
import { Home } from "./pages/Home";
import 'antd/dist/antd.css';
import Login from "./pages/Login";

function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
