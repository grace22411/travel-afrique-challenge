import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";
import { Home } from "./pages/Home";
import { ImageOverview } from "./pages/ImageOverview";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/image/:id" exact component={ImageOverview}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
