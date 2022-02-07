import React from 'react';
import styled from 'styled-components';

function Modal({ visible, onCancel, children }) {
  
    if (!visible) return null
    else
    return (
        <DarkBackground>
        <Mod.Modal>
            <Mod.Top>
                <span onClick={onCancel}>x</span>
            </Mod.Top>
            <Mod.Center>
                {children}
            </Mod.Center>
        </Mod.Modal>
        </DarkBackground>
    );
}

export default Modal;

const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
`;

const Mod = {
    Modal: styled.div`
        background: ${props => props.theme.palette.white};
        width: 350px;
        border-radius: 10px;
        box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
        text-align: center;
        padding: 5px 0px;
    `,
    Top: styled.div`
        color: ${props => props.theme.palette.black};
        span{
            cursor: pointer;
        }
    `,
    Center: styled.div`
        color: ${props => props.theme.palette.purple};
        text-transform: uppercase;
        height: 100px;
        // 수직, 수평 정렬
        display: flex;
        align-items: center;
        justify-content: center;
    `
}  