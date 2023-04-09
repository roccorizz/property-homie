import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import router
import { BrowserRouter as Router } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';
import { Auth0Provider } from '@auth0/auth0-react';
const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={auth0Domain}
    clientId={auth0ClientId}
    redirect_uri={window.location.origin}
  >

    <HouseContextProvider>

      <Router>
        <App />
      </Router>
    </HouseContextProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
