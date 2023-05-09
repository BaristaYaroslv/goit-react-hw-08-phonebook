import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefresing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefresing;
  console.log(shouldRedirect)
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  
};

export default PrivateRoute;
