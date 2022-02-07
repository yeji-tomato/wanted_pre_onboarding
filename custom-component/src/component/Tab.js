import React, { useState } from 'react';
import styled from 'styled-components';

function Tab() {

    const tabMenu = [
        {
            num: 1,
            content: 'ONE',
        },
        {
            num: 2,
            content: 'TWO',
        },
        {
            num: 3,
            content: 'THREE'
        }
    ]

  const [isTabSelected, setIsTabSelected] = useState(0);

  return (
    <>
    <Tabs>
        {
            tabMenu.map((value, idx) => (
                <>
                <TabPane
                 key={idx}
                 className = {isTabSelected === idx ? "active" : ""}
                 onClick = {() => setIsTabSelected(idx)}
                >
                 Tab {value.num}
                </TabPane>
                </>
            ))
        }
    </Tabs>
    <TabContent>
        Tab menu {tabMenu[isTabSelected].content}
    </TabContent>
    </>
  );
}

export default Tab;

const Tabs = styled.ul`
    display: flex;
    max-width: 600px;
    background-color: ${props => props.theme.palette.lightgray};
    list-style:none;
    text-align: left;
`

const TabPane = styled.li`
  width: calc(100% / 3);
  height: 40px;
  font-weight: 600;
  color: ${props => props.theme.palette.darkgray};
  line-height: 40px;
  cursor: pointer;
  padding-left: 10px;
  transition: linear 0.2s;
  box-shadow: inset 0 0 0 ${props =>  props.theme.palette.purple };
  &.active {
    color: ${props => props.theme.palette.white};
    box-shadow: inset 200px 0 0 0 ${props =>  props.theme.palette.purple };
    
}
`
const TabContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
`