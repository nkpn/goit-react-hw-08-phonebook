import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { logIn } from 'redux/contacts-operations';
import Button from '@material-ui/core/Button';

const styles = {
  form: {
    border: '1px solid rgb(235, 230, 164)',
    backgroundColor: 'rgb(228, 224, 172)',
    margin: '0 auto',
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    maxWidth: '350px',
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '10px',
    alignSelf: 'center',
  },
  input: {
    padding: '5px',
    marginLeft: '5px',
    fontSize: '16px',
    maxWidth: '200px',
    backgroundColor: '#F7F8EC',
    border: '1px solid rgb(209, 206, 206)',
  },
  button: {
    width: '200px',
    padding: '5px',
    marginLeft: '5px',
    fontSize: '16px',
    fontWeight: '500',
    backgroundColor: 'rgb(247, 248, 236)',
    border: '1px solid rgb(209, 206, 206)',
    cursor: 'pointer',
    alignSelf: 'center',
    borderRadius: '10px',
  },
};

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Please login:</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            style={styles.input}
            required
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            style={styles.input}
            required
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" style={styles.button}>
          Login
        </button>
        {/* <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={handleChange}
          type="email"
          value={email}
          style={styles.label}
        ></TextField>


        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={handleChange}
          type="password"
          value={password}
          style={styles.label}
        ></TextField>

        <Button variant="contained" color="primary" type="submit">
          Login
        </Button> */}
      </form>
    </div>
  );
}
