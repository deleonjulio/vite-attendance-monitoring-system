import {createContext, useContext, useReducer} from 'react';

type AuthenticationType = {
    id: number | null,
    firstName: string | null
    lastName: string | null
    email: string | null
}

const initialAuthentication = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
} as AuthenticationType;

const AuthenticationContext = createContext<AuthenticationType>(initialAuthentication);
const AuthenticationDispatchContext = createContext<any>(null);

export function AuthenticationProvider({children}: {children: React.ReactNode}) {
    const [authentication, dispatch] = useReducer<any>(authenticationReducer, initialAuthentication) as any;
    return (
        <AuthenticationContext.Provider value={authentication}>
            <AuthenticationDispatchContext.Provider value={dispatch}>
                {children}
            </AuthenticationDispatchContext.Provider>
        </AuthenticationContext.Provider>
    )
}

enum AuthenticationActionKind {
    LOGIN = 'LOGIN'
}

type AuthenticationActionType = {
    type: AuthenticationActionKind,
    payload: any
}

function authenticationReducer(state: any, action: AuthenticationActionType) {
    switch (action.type) {
        case 'LOGIN': {
            const { id, firstName, lastName, email } = action.payload;
            return {
                ...state,
                id,
                firstName,
                lastName,
                email
            }
        }
        default:
            return;
    }
}

export function useAuthentication() {
    return useContext(AuthenticationContext);
};

export function useAuthenticationDispatch() {
    return useContext(AuthenticationDispatchContext);
};