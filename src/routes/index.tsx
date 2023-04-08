import { useRoutes } from "react-router-dom";
import { Login } from "../features/login";
import { Home } from "../features/home";
import { useAuthentication } from "../features/login/context/AuthenticationContext";

export const AppRoutes = () => {

    const {id} = useAuthentication();
    
    const route = id ? {
        path: '/', 
        children: [ 
            {
                path: '/',
                element: <Home />
            },
        ]
    } : { 
        path: '/', 
        children: [ 
            {
                path: '/',
                element: <Login /> 
            },
        ]
    };

    return (<>{useRoutes([route])}</>);
};