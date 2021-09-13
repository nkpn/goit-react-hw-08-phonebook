import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/AuthRedux/authOperations';
import { getUsername } from 'redux/AuthRedux/authSelector';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    maxWidth: '200px',
    padding: '5 15px',
    fontWeight: '500',
    cursor: 'pointer',
    borderRadius: '10px',
    border: '1px solid grey',
    alignself: 'center',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Hi, {name}</span>
      <button
        type="button"
        style={styles.button}
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
}
