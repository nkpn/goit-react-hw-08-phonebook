import React, { useEffect } from 'react';
import '../index.css';
import Container from './Container';
import ContactsView from 'Views/ContactsView';
import Header from './Header';
import HomeView from 'Views/HomeView';
import { Route, Switch } from 'react-router';
import Registration from 'Views/Registration';
import Login from 'Views/Login';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/AuthRedux/authOperations';
import { getToken } from 'redux/AuthRedux/authSelector';

function App() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    if (token === null) {
      return;
    }
    dispatch(fetchCurrentUser());
  }, [dispatch, token]);

  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
