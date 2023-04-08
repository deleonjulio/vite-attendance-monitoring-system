import type { AxiosResponse } from 'axios';
import { POST } from '../../utils/request';

export const Home = () => {
    const handleLogout = async () => {
        await POST('/logout') as AxiosResponse;
        window.location.reload()
    };
    
    return (
        <>
            <h1>HOME</h1>
            <button onClick={handleLogout}>LOGOUT</button>
        </>
    );
}