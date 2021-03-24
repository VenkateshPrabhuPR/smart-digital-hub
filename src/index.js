import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route,Link,Switch,BrowserRouter as Router } from 'react-router-dom';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar/Navbar';
import NetworkSettings from './components/Navbar/NetworkSettings';
import AddaDatastore from './components/Navbar/AddaDatastore';
import AddaPipeline from './components/Navbar/AddaPipeline';
import ReviewandComplete from './components/Navbar/ReviewandComplete';
// import OneTimePage from './components/OneTimePage'






const routing =(
  <Router>
    <Route path = '/' component={SignIn} exact/>
    <Route path = "/navBar" component={Navbar}/>
    <Route path = '/navBar/networkSettings' component = {NetworkSettings}/>
    <Route path = '/navBar/addaDatastore' component = {AddaDatastore}/>
    <Route path = '/navBar/addaPipeline' component = {AddaPipeline}/>
    <Route path = '/navBar/reviewAndComplete' component = {ReviewandComplete}/>


  </Router>
)


ReactDOM.render(routing,document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
