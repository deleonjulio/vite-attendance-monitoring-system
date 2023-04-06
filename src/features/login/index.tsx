import { useState, useEffect } from 'react';
import type { AxiosResponse } from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Container, Form } from "./components";
import { useAuthenticationDispatch } from './context/AuthenticationContext';
import { POST } from '../../utils/request';

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAuthenticationDispatch();

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleLogin = async () => {
        const response = await POST('/login', credentials) as AxiosResponse;
        if(response?.data?.description === 'LOGIN_SUCCESSFUL') {
            let { id, firstName, lastName, email } = response.data.data;
            dispatch({type:'LOGIN', payload: {id, firstName, lastName, email}});
        }
    };

    useEffect(() => {
        async function init() {
            const response = await POST('/authenticate') as AxiosResponse;
            if(response?.data?.description === 'AUTHENTICATED') {
                let { id, firstName, lastName, email } = response.data.data;
                dispatch({type:'LOGIN', payload: {id, firstName, lastName, email}});
            }
        }
        init();
    }, []);
    
    return (
        <Container>
            <Form>
                <h1>Log in</h1>
                <Input onChange={(e: any) => setCredentials(prev => ({...prev, email: e.target.value}))} value={credentials.email} placeholder='Email' block />
                <Input onChange={(e: any) => setCredentials(prev => ({...prev, password: e.target.value}))} value={credentials.password} placeholder='Password' type="password" block />
                <Button label="LOG IN" color="success" block onClick={handleLogin} />
                <p><RegisterLink onClick={() => navigate('/forgotpassword')}>Forgot password? </RegisterLink></p>
            </Form>
        </Container>
    );
}


const RegisterLink = styled.span`
    color: #769656;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    :hover {
        color: #8dba61;
    }
`;
