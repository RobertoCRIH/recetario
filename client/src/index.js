import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LoginAndSignup from './routes/loginSignup';
import AuthDetails from './components/auth/authDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginAndSignup/>
  },
  {
    path: '/home',
    element: <AuthDetails/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

