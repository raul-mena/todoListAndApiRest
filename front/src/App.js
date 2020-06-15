
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import { getToken, removeUserSession, setUserSession, getUser } from './utils/Auth';
import Register from './pages/Register';

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  const token = getToken();

  useEffect(() => {
    const user = getUser();
    if (!token) {
      return;
    }

    setUserSession(token, user);
    setAuthLoading(false);
  }, []);

  const logout = () => {
    removeUserSession();
  }

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <PublicRoute path="/login" component={Login} />
              <PublicRoute path="/register" component={Register} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;