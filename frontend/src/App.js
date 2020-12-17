import React from "react";
import { Switch, Route } from 'react-router-dom';
import BootstrapSlider from "./components/BootstrapSlider";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Order from './components/Order/Order';
import ListMovie from './components/ListMovie';
import Navbar from './components/Navbar';
import Details from "./components/Details";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <BootstrapSlider></BootstrapSlider>
      </div>
      <Switch>
        <Route path="/Order" component={Order} />
        <Route path="/login" component={Login} />
        <Route path="/details" component={Details}/>
        <Route path="/" component={ListMovie} />
      </Switch>

    </React.Fragment>
  );
}

export default App;
