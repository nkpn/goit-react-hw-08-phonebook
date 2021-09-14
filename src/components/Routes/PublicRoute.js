import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { getIsLoggedIn } from 'redux/AuthRedux/authSelector';

const PublicRoute = ({
  children,
  props,
  restricted = false,
  urlFToRedirect,
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...props}>
      {isLoggedIn && restricted ? <Redirect to={urlFToRedirect} /> : children}
    </Route>
  );
};

export default PublicRoute;
