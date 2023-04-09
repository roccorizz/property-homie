import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import router
import { BrowserRouter as Router } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';
import { Auth0Provider } from '@auth0/auth0-react';
const auth0Domain = "dev-jufib731o4tquxmb.us.auth0.com";
const auth0ClientId = "OSdVRUHh1Y6o4wRUICVkFpPCAyLR96JB";
const audience = [
  'https://propertyhomierocco-server.vercel.app/jwt',
  'https://propertyhomierocco-server.vercel.app/services',
  'https://propertyhomierocco-server.vercel.app/services/:id',
  'https://propertyhomierocco-server.vercel.app/all-services',
  'https://propertyhomierocco-server.vercel.app/featured-properties',
  'https://propertyhomierocco-server.vercel.app/featured-properties/:id',
  'https://propertyhomierocco-server.vercel.app/allproperties',
  'https://propertyhomierocco-server.vercel.app/allproperties/:id'
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={auth0Domain}
    clientId={auth0ClientId}
    redirectUri={window.location.origin}
    audience={audience}
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
