import { useRoutes } from "react-router-dom";
import { Login } from "../features/login";
import { useAuthentication } from "../features/login/context/AuthenticationContext";

export const AppRoutes = () => {

    const {id} = useAuthentication();
    
    const route = id ? {
        path: '/', 
        children: [ 
            {
                path: '/',
                element: <h1>Home</h1>
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