import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import Card from './component/my_component/Card';
import Button from './component/my_component/Button';

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
          blue: '#096dd9',
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

export default App;
