// import ContactForm from './Form/Form';
import 'react-toastify/dist/ReactToastify.css';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { Title } from './Global.style';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { getError, getIsLoading } from 'redux/contacts/selector';
// import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Loader from './Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={Contacts}  redirectTo='/login'/>}
          />
        </Route>
      </Routes>
    </div>
  );
}
