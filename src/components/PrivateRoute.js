import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const { isLoggedIn, isRefresing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefresing;
  console.log(isLoggedIn); //false
  console.log(isRefresing); //false
  console.log(shouldRedirect); //ture
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
