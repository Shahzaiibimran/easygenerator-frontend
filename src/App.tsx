import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import { GlobalStyles } from './styles/global';
import { AuthProvider } from './context/auth';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Routes />
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      </Router>
    </AuthProvider>
  );
};

export default App;