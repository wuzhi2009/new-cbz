import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './css/app.css';
import Kopf from './Kopf';
import store from './utils/redux/store';
function App() {
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
}

export default App;
