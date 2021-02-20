import React from "react";
import CreateGallery from "./pages/CreateGallery";
import {BrowserRouter as Router ,Switch , Route} from "react-router-dom"


function App() {
  return (
    <>
      <Router>
            <Switch>
                <Route path="/"  exact component={CreateGallery} />
                {/* <Route path="/course"  component={Courses} /> */}
            </Switch>
        
        </Router>
    </>
  );
}

export default App;
