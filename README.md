# wanted_pre_onboarding
> Netlify 배포 </br>
[DEMO SITE](https://wanted-pre-onboarding-yeji.netlify.app/)

## 구현한 방법과 이유에 대한 간략한 내용
> 구현되는 컴포넌트들이 다른 코드에서도 사용될 수 있다라는 생각으로 코드를 작성하였습니다. </br>
>
> 6개의 컴포넌트를 감싸는 Card 컴포넌트는 props로 title과 children을 이용하여 재사용성이 가능하도록 만들었습니다.</br>
>
> 컴포넌트가 증가함에 따라 스타일 코드의 일관성을 유지하고 싶어서 사용되는 색상을 styled-component의 ThemeProvider를 이용하여 작성하였습니다.

- **Toggle** 
👉`useState()`의 true false값으로 toggle의 on/off
- **Modal**
👉 `useState()`의 true false값으로 Modal 창 열림/ 닫힘
- **Tab**
👉 menu, content의 값을 변경할 수 있는 객체 변수 생성 및 클릭하는 menu값에 따라 content내용 보일 수 있게 `useState()` 이용함
- **Tag**
👉 입력되는 Tag값과 입력되어져 있는 TagList를 `useState()`로 만들어서 활용함
- **AutoComplete**
👉 입력되는 value값이랑 자동검색리스트를 `useState()`로 만들어서 활용함
- **ClickToEdit**
👉 name, age, 변경된 값 editValue를 `useState()`로 만들어서 활용함

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
> 🤯❓: 선택한 태그된 코드만 삭제하는 기능의 코드를 깔끔하게 작성하는 방법이 어려웠습니다. </br> 
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
> 🤯❓: input에 값이 변경됨에 따라 일치하는 검색어를 나타내는 방법이 어려웠습니다. </br> 
> 😆❕: 처음에는 `onchangeValue`함수에서 자동완성 리스트에 검색한 키워드가 있다면 검색된 리스트가 나올 수 있게 코드를 작성하였습니다.
```jsx
    const onchangeValue = (e) => {
      setIsSerchedList(data.filter((item) => item.toLowerCase().includes(isInputValue.toLowerCase())));
      setIsInputValue(e.target.value);
    }
```
하지만 검색된 리스트의 반응이 느리다는 것을 깨닫고 난 후 `useEffect`함수를 사용해서 검색을 비교해주었습니다. 그 결과 알맞게 동작하는 것을 확인 할 수 있었습니다.
```jsx
    const onchangeValue = (e) =>  setIsInputValue(e.target.value);
    useEffect(() => {
      if(isInputValue){
        setIsSerchedList(data.filter((item) => item.toLowerCase().includes(isInputValue.toLowerCase())))
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInputValue]);
```
- **ClickToEdit**
> 🤯❓: click후 결과 값이 바뀌게 만드는 방법이 어려웠습니다. </br> 
> 😆❕: 처음에는 `name`, `age`로 상태를 구현하려고 했었습니다. 하지만 입력 값 변경 시 결과값이 바로 반영되었고, `editValue` 변수를 새롭게 만들고, input의 `onBlur` 함수를 이용하여 포커스가 해제될 때  `editValue`값이 변경되도록 구현하였습니다.
```jsx
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
```

## 자세한 실행 방법
1) `git clone https://github.com/Lee-ye-ji/wanted_pre_onboarding.git`
2) `cd custom-component`
3) `yarn i`
4) `yarn run start`
