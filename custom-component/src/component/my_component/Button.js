import React from 'react';
import styled  from 'styled-components';

function Button({ children, ...rest }) {
    return (
        <ButtonStyle {...rest}>
          {children}
        </ButtonStyle>
    )
}

export default Button;

const ButtonStyle = styled.button`
    cursor: pointer;
    color: ${props => props.theme.palette.white};
    background: ${props => props.theme.palette.purple};
    border: 0;
    padding: 20px;
    border-radius: 30px;
`