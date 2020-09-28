import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch } from "react-router-dom";
import LogIn from "./components/Login/login"
import Dashboard from "./components/dashboard/index" 
import ProtectedRoute from "./services/protected.route"
import ProtectedLogin from "./services/protected.login"

function App() {
  return (
    <Router>
      <ProtectedLogin exact path="/" component={LogIn} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
  </Router>
  );
}

export default App;
