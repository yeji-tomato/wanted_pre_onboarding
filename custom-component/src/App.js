// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';

function App() {
  
  const Content = styled.section`
    max-width: 700px;
    margin: 0 auto;
    padding: 20px 0;
  `

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ThemeProvider
      theme={{
        palette: {
          purple : '#4900CE',
          lightgray: '#E0E0E0',
          darkgray: '#A9A9A9',
          gray: '#C5C5C5',
          white: '#fff',
          black: '#000'
        }
      }}
    >
      <Content>
        <Card title="Toggle">
            <Toggle />
          </Card>
        <Card title="Modal">
          <Button onClick={() => setIsModalVisible(true)}>
            Open Modal
          </Button>
          <Modal
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          >
            Hello Codestates!
          </Modal>
        </Card>
        <Card title="Tab">
          <Tab />
        </Card>
        <Card title="Tag">
            <Tag/>
        </Card>
        <Card title="AutoComplete">
          <AutoComplete/>
        </Card>
        <Card title="ClickToEdit">
          <ClickToEdit/>
        </Card>
      </Content>
    </ThemeProvider>
  );
}

// 버튼
function Button({ children, ...rest }){

  const ButtonStyle = styled.button`
  cursor: pointer;
  color: ${props => props.theme.palette.white};
  background: ${props => props.theme.palette.purple};
  border: 0;
  padding: 20px;
  border-radius: 30px;
  `

  return (
    <ButtonStyle {...rest}>
      {children}
    </ButtonStyle>
  )
}

// 카드
function Card({ title, children }) {
    
  const Card = {
    Card: styled.div`
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
      max-width: 900px;
      min-height: 230px;
      margin: 10px;
      border-radius: 10px;
      
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

  return (
    <Card.Card>
      <Card.Header>
        {title}
      </Card.Header>
      <Card.Container>
        {children}
      </Card.Container>
    </Card.Card>
  )
}


export default App;
