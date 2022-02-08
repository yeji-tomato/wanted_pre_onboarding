import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function AutoComplete() {
    const data = ['antique', 'vintage', '중고 A급', 'refurbished', 'rustic'];

    const [isInputValue, setIsInputValue] = useState('');
    const [isSearchList, setIsSerchedList] = useState([]);
    
    const onchangeValue = (e) =>  setIsInputValue(e.target.value);
    const onValueUpdate = (newValue) => setIsInputValue(newValue);
    const removeKeyword = () => {
        setIsInputValue('')
        setIsSerchedList([])
    }
    
    useEffect(() => {
      if(isInputValue){
        setIsSerchedList(data.filter((item) => item.toLowerCase().includes(isInputValue.toLowerCase())))
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInputValue]);

  return (
    <>
    <InputContainer>
        <InputBox value={isInputValue} onChange={onchangeValue} />
        <button onClick={removeKeyword}>
          x
        </button>
      </InputContainer>
      {isSearchList.length !== 0 && (
        <Dropdown>
          {isSearchList.map((keyword, idx) => (
              <SearchItem key={idx} onClick={() => onValueUpdate(keyword)}>
                  {keyword}
              </SearchItem>
          ))
          }
        </Dropdown>
      )
      }
    </>
  );
}

export default AutoComplete;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  border: 1px solid ${props => props.theme.palette.lightgray};
  border-radius: 10px;
  padding: 10px 5px;
    &:hover{
        box-shadow: 0px 3px 2px 0px ${props => props.theme.palette.lightgray};
    }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const InputBox = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 15px;
  padding-left: 10px;
`;

const Dropdown = styled.div`
  background-color: white;
  padding: 10px 0;
  z-index: 10;
  margin-top: -10px;
  box-shadow: 0px 3px 2px 0px ${props => props.theme.palette.lightgray};
  border: 1px solid ${props => props.theme.palette.lightgray};
  border-radius: 0 0 10px 10px;
  text-align: left;
`;

const SearchItem = styled.div`
  cursor: pointer;
  padding-left: 15px;
  &:hover {
    background-color: ${props => props.theme.palette.lightgray};
  }
`;
