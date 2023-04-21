import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReservationPage from './Pages/ReservationPage';
import HomePage from './Pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
    
      <Switch>
          <Route path="/Reservation">
            <ReservationPage/>
          </Route>
          <Route path="/">
            <App />
          </Route>
        
        </Switch>
    </Router>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
