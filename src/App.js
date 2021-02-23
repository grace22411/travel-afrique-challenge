import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";
import { Home } from "./pages/Home";
import 'antd/dist/antd.css';

function App() {
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
