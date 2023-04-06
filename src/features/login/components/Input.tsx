import styled from 'styled-components';

export const Input = ({...props}) => {
    return <StyledInput {...props} block={props.block} />;
}

const StyledInput = styled.input<{ block: boolean }>`
    :focus {
        outline: none;
        border-color: #9ecaed;
        box-shadow: 0 0 4px #9ecaed;
    }
    transition: all 0.3s ease-in-out;
    display: block;
    margin:  12px 0px 12px 0px;
    padding: 16px;
    border: none;
    border-radius: 12px;
    width: ${props => props.block ? '100%' : null};
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: black;
        opacity: 0.5; /* Firefox */
    }
    box-sizing: border-box; 
    font-size: 16px;
`;