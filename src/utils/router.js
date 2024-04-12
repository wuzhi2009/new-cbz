import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChooseMonitor from "../pages/ChooseMonitor";
import TaskCenterEinsTable from "../pages/components/TaskCenterEinsTable";
import TaskCenterZweiTable from "../pages/components/TaskCenterZweiTable";
import Historical from "../pages/Historical";
import Monitor from "../pages/Monitor";
import SearchData from "../pages/SearchData";
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
                path: 'choose',
                element: <ChooseMonitor />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/choose/monitor" replace />
                    },
                    {
                        path: 'monitor',
                        element: <Monitor />
                    },
                    {
                        path: 'searchData',
                        element: <SearchData />
                    }
                ]
            },
            {
                path: 'searchData',
                element: <Historical />
                    
            }
            
        ]
    }
])

export default routers;