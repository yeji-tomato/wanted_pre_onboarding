import { useState } from 'react';
import styled, { css } from 'styled-components';

function Toggle() {

    const [isToggleSelected, setIsToggleSelected] = useState(false);
    const handleToggle = () => setIsToggleSelected(!isToggleSelected);

  return (
    <>
      <Tog.Label>
      <Tog.Checkbox
            onChange={handleToggle}
            type="checkbox"
      />
      <Tog.Span checked={isToggleSelected} />
      </Tog.Label>
      <p>
        Toggle Switch {isToggleSelected ? 'ON' : 'OFF'}
      </p>
    </>
  )
}

export default Toggle;


const Tog = {
  Label: styled.label`
    position: relative;
    display: inline-block;
    width: 80px;
    height: 38px;
  `,
  Checkbox: styled.input`
    opacity: 0;
    width: 0;
    height: 0;
  `,
  Span: styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;

    // 슬라이드 애니메이션
    background-color: ${props =>  props.theme.palette.gray};
    background: linear-gradient(to left, ${props =>  props.theme.palette.gray} 50%, ${props =>  props.theme.palette.purple} 50%) right;
    background-size: 200%;
    transition: 0.5s ease-out;

    &:before{
      position: absolute;
      content: "";
      height: 30px;
      width: 30px;
      bottom: 4px;
      background-color:  ${props =>  props.theme.palette.white };
      border-radius: 50%;
      left: 4px;
      transform: translateX(0);
      transition: 0.5s ease-out;
    }
    // toggle ON 되었을 때
    ${props => props.checked && 
      css`
      // background-color:  ${props =>  props.theme.palette.purple };
      background-position: left;
        &:before{
          left: calc(100% - 4px);
          transform: translateX(-100%);
          transition: 0.5s ease-out;
        }
      `
    }
  `
}