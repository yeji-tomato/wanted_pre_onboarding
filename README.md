# wanted_pre_onboarding

## 구현한 방법과 이유에 대한 간략한 내용
> 구현되는 컴포넌트들이 다른 코드에서도 사용될 수 있다라는 생각으로 코드를 작성하였습니다. </br>
>
> 6개의 컴포넌트를 감싸는 Card 컴포넌트는 props로 title과 children을 이용하여 재사용성이 가능하도록 만들었습니다.</br>
>
> 컴포넌트가 증가함에 따라 스타일 코드의 일관성을 유지하고 싶어서 사용되는 색상을 styled-component의 ThemeProvider를 이용하여 작성하였습니다.

- `Toggle` 
> 
- `Modal`
> 
- Tab.js
- Tag.js
- AutoComplete.js
- ClickToEdit.js

## 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
| 🤯❓         | 어려웠던 점 |
| ---------- | ------------- |
| 😆❕ | <strong>해결 방법</strong> |

- **Toggle**
> 🤯❓ : toggle의 on / off 상태에 따라 background가 왼쪽에서 오른쪽으로, 오른쪽에서 왼쪽으로 이동시키는 방법이 어려웠습니다.</br>
> 😆❕ : 처음에는 transition과 animation을 이용하여 색을 변경시키려고 하였으나 계속된 실패를 통해 검색을 하였고, </br>
> 그 결과 `linear-gradient`와 `background-size`를 이용하여 방법을 해결하였습니다.
```css
// 슬라이드 애니메이션
background-color: ${props =>  props.theme.palette.gray};
background: linear-gradient(to left, ${props =>  props.theme.palette.gray} 50%, ${props =>  props.theme.palette.purple} 50%) right;
background-size: 200%;
transition: 0.5s ease-out;
```
- **Modal**
> 🤯❓: `Modal.js`에서 button과 Modal 창을 둘 다 어떻게 잘 구현할 수 없을까? 라는 생각으로 코드를 작성하는 게 어려웠습니다. </br>
> 😆❕ : 처음에는 `useState`의 `boolean`값을 통해 버튼이 눌리면 `modal`이 나오게 하기로 코드를 작성하였지만 `if문`과 `else문`에 `button`이 두 번 나와서 
> 별로 좋지 않은 방법인 것 같다는 생각을 하였습니다. 그 결과 `Modal창`만 함수로 빼자!라는 생각을 통해  `ModalWindow()`라는 함수를 작성하였고, 그 안에 텍스트가 바뀔 수 있도록 `props`로 `children`을 이용하여 작성하였습니다. 그 외에 필요한 창이 보이는 지 아닌지 나타내는 변수 `visible`과 x버튼을 누르면 창이 꺼지는 변수 `onCancel`도 함께 `props`로 넘겨주었습니다.
```js
function ModalWindow({ visible, onCancel, children }){
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
```
- **Tab**
> 🤯❓: 선택된 Tab이 눌러졌을 때 선택된 색을 바꾸는 방법이 어려웠습니다. </br>
> 😆❕ : 변경된 색만 나타날 수 있게 .active를 className에 지정해주었습니다. 선택되어진 tab을 useState `isTabSelected`변수에 넣어주었고, map함수에서 key값과 `isTabSelected`값이 같으면 .active가 생기도록 만들었습니다. 
``` jsx
  className = {isTabSelected === idx ? "active" : ""}
```
```css
  &.active {
    color: ${props => props.theme.palette.white};
    box-shadow: inset 200px 0 0 0 ${props =>  props.theme.palette.purple };
}
```
- **Tag**
> 🤯❓: 선택한 태그를 삭제하고 삭제되지 않는 태그는 존재하는 코드를 깔끔하게 작성하는 방법이 어려웠습니다. </br> 
> 😆❕: 처음에는 for문을 통해 isHashTagList에 있는 변수의 index값과 삭제되어지는 index값을 비교하여 값이 같지 않다면 isNewHashTagList에 값을 넣고 그 후에 `setIsHashTagList(isNewHashTagList)`로 작성하였습니다. 하지만 코드를 더 편리하게 작성하는 방법이 없나라는 생각으로 비슷한 함수를 찾게 되었고, `filter함수`를 알게 되었습니다.
그 결과 7줄이었던 코드가 단 2줄로 바뀔 수 있었습니다.
```jsx
    const isNewHashTagList = []
    for(let i = 0; i < isHashTagList.length; i++){
      if(i !== id){
        isNewHashTagList.push(isHashTagList[i])
        setIsHashTagList(isNewHashTagList)
      }
    }
```
```jsx
    const isNewHashTagList = isHashTagList.filter((value, idx) => idx !== id);
    setIsHashTagList(isNewHashTagList);
```
- **AutoComplete**
> 🤯❓:
> 😆❕
- **ClickToEdit**
> 🤯❓:
> 😆❕

## 자세한 실행 방법
