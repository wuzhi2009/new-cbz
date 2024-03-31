import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TaskCenterEinsTable from "../pages/components/TaskCenterEinsTable";
import TaskCenterZweiTable from "../pages/components/TaskCenterZweiTable";
import Monitor from "../pages/Monitor";
import TaskCenter from "../pages/TaskCenter";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
              path: 'taskCenter',  
              element: <TaskCenter />,
              children: [
                {
                    path: 'eins',
                    element: <TaskCenterEinsTable />,
                    index:true
                },
                {
                    path: 'zwei',
                    element: <TaskCenterZweiTable />
                }
              ]
            },
            {
                path: 'monitor',
                element: <Monitor />
            }
            
        ]
    }
])

export default routers;