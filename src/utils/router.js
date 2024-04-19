import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChooseMonitor from "../pages/ChooseMonitor";
import TaskCenterEinsTable from "../pages/components/TaskCenterEinsTable";
import TaskCenterZweiTable from "../pages/components/TaskCenterZweiTable";
import Historical from "../pages/Historical";
import Login from "../pages/Login";
import Monitor from "../pages/Monitor";
import SearchData from "../pages/SearchData";
import SearchDataTable from "../pages/SearchDataTable";
import TaskCenter from "../pages/TaskCenter";
import TaskCenterXiangQing from "../pages/TaskCenterXiangQing";
import CountData from "../pages/CountData";
import Library from "../pages/Library";
import LibraryTableEins from "../pages/components/LibraryTableEins";
import LibraryTableZwei from "../pages/components/LibraryTableZwei";

const routers = createBrowserRouter([
    {
        index: true,
        element: <Navigate to="/taskCenter/eins" />
    },
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
                    
            },
            {
                path: 'searchDataTable',
                element: <SearchDataTable />
            },
            {
                path: 'countData',
                element: <CountData />
            },
            {
                path: 'library',
                element: <Library />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/library/eins" replace />
                    },
                    {
                        path: 'eins',
                        element: <LibraryTableEins />
                    },
                    {
                        path: 'zwei',
                        element: <LibraryTableZwei />
                    }
                ]
            }
            
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default routers;