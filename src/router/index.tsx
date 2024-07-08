import React from "react";
import { Navigate, useRoutes } from 'react-router-dom';

// 登录页
const Login = React.lazy(() => import('../pages/login'));
// 注册页
const Register = React.lazy(() => import('../pages/register'));

const routes = [
    { path: '/', element: <Navigate to="/login" /> },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
];

const AppRoutes = () => {
    let element = useRoutes(routes);
    return element;
};

export default AppRoutes;
