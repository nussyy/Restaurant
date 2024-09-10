import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Reservation from './components/Reservation';
import Query from './components/Query';
import AdminDashboard from './components/AdminDashboard';
import StaffDashboard from './components/StaffDashboard';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>ABC Restaurant</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/reserve">Reservation</a>
            <a href="/query">Query</a>
            <a href="/admin">Admin Dashboard</a>
            <a href="/staff">Staff Dashboard</a>
            <a href="/register">Register</a>
            <a href="/login">Login</a>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reserve" component={Reservation} />
            <Route path="/query" component={Query} />
            <Route path="/admin" component={AdminDashboard} />
            <Route path="/staff" component={StaffDashboard} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
