import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GitProvider } from './Context/GitContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-dhbcbisal6dqghlo.us.auth0.com"
            clientId="dp1ZsyXuG1fGxPuWbJj6qZLK9RUvAQh9"
            redirectUri={window.location.origin}
        >
            <GitProvider>
                <App />
            </GitProvider>
        </Auth0Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
