
import LayoutDefault from "../components/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ResultAnswer from "../pages/ResultAnswer";

export const routes = [
    {
        path: '/',
        element: <LayoutDefault/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/result',
                element: <ResultAnswer/>
            }  
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
]