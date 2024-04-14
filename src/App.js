import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './css/app.css';
import Kopf from './Kopf';
import store from './utils/redux/store';
import { get } from './utils/reqUtil';
function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  // 初始化缓存请求
  useEffect(() => {
    // 获取用户信息
    // 获取检测列表信息
    get("/monitoring/getDeptList").then(res => {
      if (res.data.code === 200) {
        setValue(100);
        setData(res.data.data);
      }
    });
    const time = setInterval(() => {
      setValue((value) => {
        if (value < 95) {
          return (value + 2)
        } else {
          return value;
        }});
    }, 200);
    return () => clearInterval(time);
  }, []);
  if (data.length > 0) {
    return (
      <div className="app">
        <Provider store={store}>
        <Kopf />
        <div>
          <Outlet />
        </div>
        </Provider>
      </div>
    ); 
  } else {
    return (
      <div style={ {position: 'relative', top:0, left:0, transform: 'translate(45%, 1585%)'} }>
        请等待 <Spin />
        <progress value={value} max={100} style={ {width: 300, color: '#61A3FF', boxShadow: '1px 1px 2px'} } />
      </div>
    )
  }
  
}

export default App;
