import styled from 'styled-components';

export const Button = ({...props}) => {
    return <StyledButton {...props} color={props.color} block={props.block}>{props.label}</StyledButton>
}

const getBackgroundColor = (color: string) => {
    switch (color) {
        case 'primary':
            return '#1CB0F6'
        case 'success':
            return '#769656'
        default:
            break;
    }
}

const getColor = (color: string) => {
    switch (color) {
        case 'primary':
        case 'success':
            return 'white'
        default:
            break;
    }
}

const getBorderColor = (color: string) => {
    switch (color) {
        case 'primary':
        case 'success':
            return 'transparent';
        default:
            break;
    }
}

const getBorderHighlight = (color: string) => {
    switch (color) {
        case 'primary':
            return '#64cafa'
        case 'success':
            return '#8dba61';
        default:
            break;
    }
}

const StyledButton = styled.button<{block: boolean, color: string}>`
    :hover, :focus {
        background-color: ${({color} : {color: string}) => getBorderHighlight(color)};
        cursor: pointer;
    }
    :focus {
        outline: none;
    }

    background-color: ${({color} : {color: string}) => getBackgroundColor(color)};
    color:  ${({color} : {color: string}) => getColor(color)};
    border-color: ${({color} : {color: string}) => getBorderColor(color)};
    padding: 16px 20px;
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
    width: ${props => props.block ? '100%' : null};
    font-weight: bold;
    font-size:16px;
`;