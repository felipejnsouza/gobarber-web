import styled from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}


export const Container = styled.div<ContainerProps>`
background: #232129;
border-radius: 10px;
padding: 16px;
width: 100%;

border: 2px solid #232129;
color: #666360;

display:flex;
align-items: center;

& + div {
            margin-top: 8px
}

color: ${props => props.isFocused || props.isFilled ? '#ff9000' : '#666360'};
border-color: ${props => props.isFocused ? '#ff9000' : '#232129'};


    input {
        flex: 1;    
        background: transparent;
        border: 0;
        color: #f4ede8;

        
        &::placeholder {
            color: #666360;
        }

    }

    svg {
        margin-right: 16px
    }
`;