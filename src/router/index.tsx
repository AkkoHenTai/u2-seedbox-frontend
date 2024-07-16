import React from "react";
import { Navigate, useRoutes } from 'react-router-dom';

// 登录页
const Login = React.lazy(() => import('../pages/login'));
// 注册页
const Register = React.lazy(() => import('../pages/register'));

// 主页
const HomeBody = React.lazy(() => import('../pages/home/body'));

// U2
const U2Setting = React.lazy(() => import('../pages/u2/setting')); // 设置
const U2Subscribe = React.lazy(() => import('../pages/u2/subscribe')); // 订阅

const routes = [
    { path: '/', element: <Navigate to="/home" /> },
    { path: '/U2', element: <Navigate to="/U2/setting" /> },
    {
        path: '/',
        element: <HomeBody />,
        children: [
            {
                path: '/U2/setting',
                element: <U2Setting />
            },
            {
                path: '/U2/subscribe',
                element: <U2Subscribe />
            }
        ]
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