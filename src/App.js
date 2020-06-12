import React, {useState, Suspense, useEffect} from 'react';
import {Route, Switch,Redirect,} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavigation from "./shared/navigation/MainNavigation";
import LandingPage from "./main page/LandingPage";
import Login from "./customer/pages/Login";
import Signup from "./customer/pages/Signup";
import HowItWork from "./main page/HowItWork";
import Designs from "./products/pages/Designs";
import {AuthContext} from "./shared/context/auth-context";
import Cart from "./products/pages/Cart";
import Orders from "./products/pages/Orders";
import Spinner from "react-bootstrap/Spinner";
import {useAuth} from "./shared/hooks/auth-hook";



function App() {
const {token,userId,login,logout}= useAuth()

let routes;
if (token){
    routes = (
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/how-it-works" exact component={HowItWork}/>
            <Route path="/products" exact component={Designs}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/orders" exact component={Orders}/>
            <Redirect to="/"/>
        </Switch>
    )
} else{
    routes = (
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/how-it-works" exact component={HowItWork}/>
            <Route path="/products" exact component={Designs}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
            <Redirect to='/login' />
        </Switch>
    )

}
  return (
      <AuthContext.Provider value={{userId:userId,token: token,isLoggedIn: !!token,login:login, logout: logout}}>
          <React.Fragment>
            <MainNavigation/>
            <main>
              <Suspense fallback={<div className="center"><Spinner animation="border" variant="primary"/></div> }>
              {routes}
              </Suspense>
            </main>
        </React.Fragment>
      </AuthContext.Provider>
  );
}

export default App;
