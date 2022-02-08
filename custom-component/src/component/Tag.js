import React, { useState } from 'react';
import styled from 'styled-components';

function Tag() {

  const [isHashTag, setIsHashTag] = useState('');
  const [isHashTagList, setIsHashTagList] = useState(['CodeStates', 'JJang']);

  const onChangeHashtag = (e) => setIsHashTag(e.target.value);

  const addNewHashTag = (newTag) => {
    // 중복 태그 isHashTagList에 추가하지 않기
    const dup = isHashTagList.find((tag) => tag === newTag);
    if(!dup){
      isHashTagList.push(newTag);
    }
    setIsHashTag('')
  }

  const onEnterKeyUp = (e) => {
    if (e.target.value && e.key === "Enter") {
      addNewHashTag(e.target.value);
    }
  }

  const removeHashtag = (id) => {
    const isNewHashTagList = isHashTagList.filter((value, idx) => idx !== id);
    setIsHashTagList(isNewHashTagList);
  }

  return (
    (
        <>
      <TagBox>
        {isHashTagList.map((tag, idx) => (
          <TagItem key={idx}>
            <span>{tag}</span>
            <button onClick={() => removeHashtag(idx)}>
              x
            </button>
          </TagItem>
        ))}
        <InputBox
          value={isHashTag}
          onChange={onChangeHashtag}
          placeholder="Press Enter to add tags"
          onKeyUp={onEnterKeyUp}
        />
      </TagBox>
        </>
    )
  );
}

export default Tag;

const TagBox = styled.div`
  border: 1px solid  ${props => props.theme.palette.lightgray};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  border-radius: 5px;
  margin: 10px;
  height: 45px;
  &:hover{
    border: 1px solid  ${props => props.theme.palette.purple};
  }
`;

const InputBox = styled.input`
  border: none;
  outline: none;
  float: left;
  min-height: 30px;  
  flex-grow: 1;
`;

const TagItem = styled.div`
  display: flex;
  flex-wrap: wrap;  
  margin: 5px 4px;
  padding: 7px 10px;
  color: ${props => props.theme.palette.white};
  background-color: ${props => props.theme.palette.purple};
  border-radius: 5px;

  span{
    padding-right: 5px;
  }

  button{
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${props => props.theme.palette.white};
  }
`;