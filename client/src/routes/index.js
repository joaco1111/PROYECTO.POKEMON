import React from 'react';
import ReactDOM from 'react-dom';
//import App from '../App';
import './index.css';
import reportWebVitals from '../reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import HomePage from '../views/HomePage';
import DetailPage from '../views/DetailPage';
import FormPage from '../views/FormPage';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" views={LandingPage} />
        <Route path="/home" views={HomePage} />
        <Route path="/detail/:id" views={DetailPage} />
        <Route path="/create" views={FormPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
