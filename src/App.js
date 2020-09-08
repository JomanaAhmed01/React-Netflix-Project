import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import HomePage from "../src/pages/HomePage"

function App() {
  return (
     <Router>
       <Switch>
         <Route exact path="/">
            <HomePage />
         </Route>
       </Switch>
     </Router>
  )
}

export default App;
