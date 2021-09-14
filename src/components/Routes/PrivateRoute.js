import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { getIsLoggedIn } from 'redux/AuthRedux/authSelector';

const PrivateRoute = ({ children, props, urlFToRedirect }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={urlFToRedirect} />}
    </Route>
  );
};

export default PrivateRoute;
