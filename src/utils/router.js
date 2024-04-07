import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import TaskCenterEinsTable from "../pages/components/TaskCenterEinsTable";
import TaskCenterZweiTable from "../pages/components/TaskCenterZweiTable";
import Monitor from "../pages/Monitor";
import TaskCenter from "../pages/TaskCenter";
import TaskCenterXiangQing from "../pages/TaskCenterXiangQing";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="/taskCenter" />
            },
            {
              path: 'taskCenter',  
              element: <TaskCenter />,
              children: [
                {
                    index:true,
                    element: <Navigate to="/taskCenter/eins" replace />
                },
                {
                    path: 'eins',
                    element: <TaskCenterEinsTable />
                },
                {
                    path: 'zwei',
                    element: <TaskCenterZweiTable />
                }
              ]
            },
            {
                path: 'taskCenterXiangQing',
                element: <TaskCenterXiangQing />
            },
            {
                path: 'monitor',
                element: <Monitor />
            }
            
        ]
    }
])

export default routers;