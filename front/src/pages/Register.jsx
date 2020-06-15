import React, { useState } from 'react';
import { create } from '../services/UserService'

function Register(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleRegister = () => {
    setError(null);
    setLoading(true);
    create({username: username.value, password: password.value}).then(response => {
      setLoading(false);
      props.history.push('/login');
    }).catch(error => {
      setLoading(false);
      setError("Something went wrong. Please try again later.");
    });
  }

  const goToLoginPage = () => {
    props.history.push('/login');
  }

  return (
    <div>
      Register<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Register'} onClick={handleRegister} disabled={loading} /><br />
      <a className="pointer" onClick={goToLoginPage} >or Login</a>
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

export default Register;