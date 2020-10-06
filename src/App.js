import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import HomePage from "../src/pages/HomePage"
import SignInPage from '../src/pages/SignInPage';

function App() {
  return (
     <Router>
       <Switch>
         <Route exact path="/">
            <HomePage />
         </Route>
         <Route path="/signin">
            <SignInPage />
         </Route>
       </Switch>
     </Router>
  )
}

export default App;
