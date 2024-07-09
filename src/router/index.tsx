import React from "react";
import { useRoutes } from 'react-router-dom';

// 登录页
const Login = React.lazy(() => import('../pages/login'));
// 注册页
const Register = React.lazy(() => import('../pages/register'));

// 主页
const HomeBody = React.lazy(() => import('../pages/home/body'));

const routes = [
    {
        path: '/',
        element: <HomeBody />
    },
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
