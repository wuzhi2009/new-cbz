import React from 'react';
import ReactDOM from 'react-dom/client';
import routers from './utils/router';
import './css/all.css';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routers} />
);