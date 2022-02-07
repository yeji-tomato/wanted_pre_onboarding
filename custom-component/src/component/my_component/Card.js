import React from 'react';
import styled from 'styled-components';

function Card({ title, children }) {
  return (
    <CardStyle.Card>
        <CardStyle.Header>
            {title}
        </CardStyle.Header>
        <CardStyle.Container>
            {children}
        </CardStyle.Container>
    </CardStyle.Card>
  )
}

export default Card;

const CardStyle = {
    Card: styled.div`
      // box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
      max-width: 900px;
      min-height: 230px;
      margin: 10px;
      border-radius: 10px;
      border: 2px solid ${props => props.theme.palette.lightgray};
      box-shadow: 0px 1px 0px 0px ${props => props.theme.palette.lightgray};
    `,
    Header: styled.div`
      font-size: 20px;
      font-weight: bold;
      padding: 10px;
    `,
    Container: styled.div`
      max-height: 120px;
      text-align: center;
      margin-top: 30px;
    `
  }