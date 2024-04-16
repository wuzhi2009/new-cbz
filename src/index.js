import React from 'react';
import ReactDOM from 'react-dom/client';
import routers from './utils/router';
import './css/all.css';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import 'dayjs/locale/zh-cn';
import zhCn from 'antd/locale/zh_CN'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCn}>
        <RouterProvider router={routers} />
    </ConfigProvider>
);