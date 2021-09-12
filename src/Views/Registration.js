import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts-operations';
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

export default function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(contactsOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Welcome to registration page:</h1>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
        style={styles.form}
      >
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            style={styles.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          />
        </label>
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
          Registration
        </button>

        {/* <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={handleChange}
          type="text"
          value={name}
          style={styles.label}
        ></TextField>
        <TextField
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
          Register
        </Button> */}
      </form>
    </div>
  );
}
