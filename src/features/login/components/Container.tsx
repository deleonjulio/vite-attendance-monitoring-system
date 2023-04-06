import styled from 'styled-components';

export const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;