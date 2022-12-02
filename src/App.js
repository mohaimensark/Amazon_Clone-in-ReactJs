/* eslint-disable no-unused-vars */
import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout.js';
import Login from './Login';
import { BrowserRouter as Router ,Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
         <div className="App">


           {/*Header*/}
      


              <Switch>
                     <Route path="/login">
                               <Header /> 
                                <Login />
                     </Route>

                    <Route path="/checkout">
                           
                              <Header />
                              <Checkout />
                              
                    </Route>

                    <Route path="/">
                    
                              {/*Home*/}
                              <Header />
                              <Home />

                    </Route>

              </Switch>
          </div>
    </Router>
  );
}

export default App;
