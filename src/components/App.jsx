// import ContactForm from './Form/Form';
import 'react-toastify/dist/ReactToastify.css';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { Title } from './Global.style';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContact } from 'redux/contacts/operations';
// import { getError, getIsLoading } from 'redux/contacts/selector';
// import Loader from './Loader/Loader';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';

export function App() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
          {/* <Route path="contscts" element={<Contacts />} /> */}
          </Route>
      </Routes>
    </div>
  );
}
