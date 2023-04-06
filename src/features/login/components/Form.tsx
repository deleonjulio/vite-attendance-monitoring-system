import styled from 'styled-components';
import { device } from '../../../config/devices';

export const Form = ({children}: {children: React.ReactNode}) => {
    return (
        <StyledForm>
            {children}
        </StyledForm>
    );
}

const StyledForm = styled.div`
    position: relative;
    top: 25vh;
    @media ${device.xs} { 
        width: 340px;
    }

    @media ${device.sm} { 
        width: 400px;
    }
    margin: 0 auto;
`;