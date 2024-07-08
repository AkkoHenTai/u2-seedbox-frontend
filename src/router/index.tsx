import React from "react";
import { Navigate, useRoutes } from 'react-router-dom';

const Login = React.lazy(() => import('../pages/login'));

const routes = [
    { path: '/', element: <Navigate to="/login" /> },
    {
        path: '/login',
        element: <Login />
    }
];

const AppRoutes = () => {
    let element = useRoutes(routes);
    return element;
};

export default AppRoutes;
