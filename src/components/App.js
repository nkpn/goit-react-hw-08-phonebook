import React, { useEffect, Suspense } from 'react';
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
import CustomLoader from './SpinnerLoader/SpinnerLoader';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

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
        <Suspense fallback={CustomLoader}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PrivateRoute exact path="/contacts" urlFToRedirect="/login">
              <ContactsView />
            </PrivateRoute>
            <PublicRoute
              exact
              path="/register"
              restricted
              urlFToRedirect="/contacts"
            >
              <Registration />
            </PublicRoute>

            <PublicRoute
              exact
              path="/login"
              restricted
              urlFToRedirect="/contacts"
            >
              <Login />
            </PublicRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
