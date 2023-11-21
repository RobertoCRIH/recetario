import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import LoginAndSignup from './routes/loginSignup';
import AuthDetails from './components/auth/authDetails';
import Recipe from './routes/recipe';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Post from './routes/post';
import Put from './routes/put';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginAndSignup/>
  },
  {
    path: '/home',
    element: <AuthDetails/>
  },
  {
    path: '/recipe',
    element: <Recipe/>
  },
  {
    path: '/post',
    element: <Post></Post>
  },
  {
    path: '/put',
    element: <Put/>
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

