import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import HomePage from "../src/pages/HomePage"
import SignInPage from '../src/pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

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
         <Route path="/signup">
            <SignUpPage />
         </Route>
       </Switch>
     </Router>
  )
}

export default App;
