import React, { Fragment, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
/////////////////
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { toast } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Bitacora from "./components/Bitacora.js";
import Header from "./components/Header";
import Home from "./components/Home";
import '@babel/polyfill'; 
import {ModalContext} from "./context/ModalesContext.js";
import {ModalProvider}  from "./context/ModalesContext.js";
import {RemoteContext} from "./context/RemotosContext.js";
import {RemoteProvider}  from "./context/RemotosContext.js";
///////////////////////////

toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 console.log('App 10' );
 
  const checkAuthenticated = async () => {
    try {
    console.log('App 11' );  
        const res = await fetch("http://backendpandoragui.herokuapp.com/authentication/verify", {

       //  const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();
       console.log('App 15 parseRes',parseRes );
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error('App 12',err.message);
    }
  };

  
   const setAuth = boolean => {
    setIsAuthenticated(boolean);
    console.log('App 13' );
  };

   useEffect(() => {
    checkAuthenticated();
    console.log('App 14' );
  }, []);

////////77

  return (
    

    <React.Fragment>

     <Router>
     
    <Header/>
    
        <div className="container" >
         
          <Switch>
            <Route
              exact
              path="/login"
               render={props =>
     !isAuthenticated ? (<Login {...props}  setAuth={setAuth} />) : (<Redirect to="/dashboard/bitacoras" />)}
            />
            <Route
              exact
              path="/register"
              render={props =>
    !isAuthenticated ? (<Register {...props}  setAuth={setAuth} />) : (<Redirect to="/login" />)}  
            />
            <Route
              exact
              path="/dashboard/bitacoras"
             render={props =>
   isAuthenticated ? (<Bitacora {...props}  setAuth={setAuth} />) : (<Redirect to="/login" />)} 
            />
            <Route
              exact
              path="/"
             render={props =>
   isAuthenticated ? (<Bitacora {...props}  setAuth={setAuth} />) : (<Redirect to="/login" />)} 
            />
 
          </Switch>
          
        </div>
      
      </Router>
     
    </React.Fragment>
    

  );
}

export default App;

