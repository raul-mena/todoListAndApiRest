import React, { useState } from 'react';
import { setUserSession } from '../utils/Auth';
import { login } from '../services/AuthService'

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    login(username.value, password.value).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.data);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      setError("Something went wrong. Please try again later.");
    });
  }

  const goToRegisterPage = () => {
    props.history.push('/register');
  }

  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
      <a className="pointer" onClick={goToRegisterPage} >or Register</a>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;