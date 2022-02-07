import React, { useState } from "react";
import styled from "styled-components";

function ClickToEdit() {

    const [name, setName] = useState('김코딩');
    const [age, setAge] = useState(20);
    const [editValue, setEditValue] = useState({name, age});

    const onBlurEdit = () => setEditValue({name, age})

  return (
    <>
    <Form.Item>
        <Form.Label>이름</Form.Label>
        <Form.Input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        onBlur={onBlurEdit}
        />
    </Form.Item>
    <Form.Item>
        <Form.Label>나이</Form.Label>
        <Form.Input 
        value={age} 
        onChange={(e) => setAge(e.target.value)}
        onBlur={onBlurEdit}
        />
    </Form.Item>
    <Content>
        <span>이름 {editValue.name}</span>
        <span>나이 {editValue.age}</span>
    </Content>
    </>
  );
}

export default ClickToEdit;


const Form = {
    Item: styled.div`
        font-size: 15px;
        margin-bottom: 20px;
    `,
    Label: styled.label`
        margin-right: 15px;
    `,
    Input: styled.input`
        text-align: center;
        line-height: 20px;
        border: 1px solid ${props => props.theme.palette.gray};
        height: 30px;
        &:focus{
            outline: none;
            border-radius: 5px;
            border: 1px solid ${props => props.theme.palette.blue};
            box-shadow: 0px 0px 0px 1px ${props => props.theme.palette.blue};
        }
    `
}

const Content = styled.div`
  span:first-child {
    margin-right: 10px;
  }
`;