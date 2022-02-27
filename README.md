# react-custom component
React.js를 활용하여 custom component를 구현하고 있습니다.  
기능 구현에 직접적인 영향을 주는 라이브러리는 사용하지 않고 있습니다.

[페이지 링크](https://holystoryseo.github.io/react-custom-component/)

react-custom-component 목록
1. Toggle
2. Modal
3. Tab
4. Tag
5. AutoComplete
6. ClickToEdit
7. Carousel - index, slider
8. Infinite scroll (예정)
9. Loading (예정)


## 구현 방법
리액트의 Hook인 useState, useEffect, useRef를 활용하여  
입력값과 이벤트 핸들러에 따라 component 기능이 작동하도록 하였습니다.

### `Toggle`
#### 설명
useState를 사용하여 토글 버튼의 on/off 여부를 확인할 수 있도록 하였습니다.  
토글 버튼 제어를 위해서 toggleHandler라는 이벤트 핸들러를 사용하여 클릭할 때마다 상태값을 T/F로 체크했습니다.  
toggle 상태를 설명하는 description(toggle Switch on || toggle Switch off)은 조건부 연산자를 활용하여 구현하였습니다.

#### 기술 이슈
1.CSS: 토근 원이 이동을 하면서 배경색이 원의 중간까지만 채워지는 느낌의 효과   
<br>
[수정 전]: 한번에 배경색이 변한다.  
![Toggle 수정 전](https://user-images.githubusercontent.com/87353284/155888438-f5439d12-be82-4ca9-8b6f-54c47cedfb05.gif)  
<br>
[수정 후]: 토글 원의 이동과 함께 원의 중간까지만 배경색이 변한다.  
![Toggle 수정 후](https://user-images.githubusercontent.com/87353284/155888153-40f63f11-e920-45d8-959a-a366e4462960.gif)  

#### 해결 방법
background의 linear-gradient와 background-size 200%로 설정하여 해결  
linear-gradient(to left,  ${subColor} 50%, ${mainColor} 50%) right은 오른쪽에서 왼쪽으로 gradient 효과를 주는데 subColor 50%를 시작으로 mainColor 50%으로 색깔이 점차 변한다는 의미이다. 그런데 이 설정의 상태에서 background-size를 200%(100%이 아님)으로 주면 mainColor 50%을 준게 결국에는 mainColr 100%와 동일한 효과를 주게 되는 것이다.

토근 버튼을 누르면 background: linear-gradient(to right,  ${mainColor} 50%, ${subColor} 50%) left으로 바뀌는데 이건 왼쪽에서 오른쪽으로 mainColor에서 subColor로 바뀐다는 의미인데 처음과는 반대로 subColor 50%을 준게 background-size 200% 설정에 영향을 받아 subColor 100%와 동일하게 된다.  

```js
>.toggle-container {
    background: linear-gradient(to left,  ${subColor} 50%, ${mainColor} 50%) right;
    background-size: 200%;
    transition: 1s;
    &.toggle--checked {
      background: linear-gradient(to right,  ${mainColor} 50%, ${subColor} 50%) left;
      background-size: 200%;
      transition: 1s;
    }
```

### `Modal`

Modal 컴포넌트는 useState를 사용하여 모달 창의 open/close 여부를 확인할 수 있도록 하였습니다.
모달창과 배경을 제어하기 위해 이벤트 핸들러 modalHanlder를 사용하였습니다.
모달 Background 컴포넌트는 modal이 열릴 때 뒤의 배경을 어둡게 만들어 줍니다.

### `Tab`

Tab 컴포넌트는 탭 메뉴 정보를 menuArr이라는 배열에 미리 담았고 특정 탭을 클릭할 때마다 index가 변경되는 상태값 체크를 위해 useState를 사용하였습니다.

li 태그로 메뉴를 생성하고, 각 메뉴 탭을 클릭하였을 경우 뷰가 전환되도록 index 상태값을 변경시키주는 이벤트 핸들러 tabHanlder를 사용하였습니다.

조건부 연산자를 활용하여 클릭한 탭 메뉴만 변하도록 submeno-focused 클래스 변환을 구현하였습니다.

### `Tag`

Tag 컴포넌트는 tagData라는 배열 형태의 상태를 가집니다. inputValue 상태로 입력값을 체크하고 Enter를 누르면 addTagData 이벤트 핸들러가 작동하여 기존의 배열값에 추가가 되어서 랜더링 됩니다.

TagCloseIcon을 클릭하면 removeTagData 함수가 작동하여 배열에서 해당 index를 가진 태그가 삭제되게 됩니다.

### `AutoComplete`

AutoCmoplete 컴포넌트는 hasText 상태값으로 input 값의 유무를 확인합니다. matchedListsms 추천 항목을 dropDown 형식으로 보일 수 있도록 filter 역할을 합니다.

handleCloseDropDown 이벤트 핸들러는 AutoCompleteContainer 영역 밖을 클릭하면 input창이 초기화되는 역할을 합니다.

li 태그로 구현된 추천항목 목록에서 개별 목록을 선택하면 input 창의 값을 선택한 값으로 바꾸어 주는 selectList 함수도 있습니다. 

handleCloseDropDown 도 onClick함수이기 때문에 selectList 함수에는 부모 요소에 이벤트가 전달되는 이벤트 버블링 방지를 위해 stopPropagation 함수를 추가하였습니다.

### `ClickToEdit`

Myinput 컴포넌트는 isEditMode 여부를 체크하는 상태가 존재합니다. newValue 값은 isEditMode가 true일 때 작동을합니다. 조건부 렌더링을 이용하여 Edit가 가능할 때 inputEidt 컴포넌트를 불러옵니다.

onBlur 이벤트는 브라우저 창이 포커스를 잃었을 경우에 동작되며 커서가 input 태그를 떠나게 되면 EditMode가 false가 되며 input에 입력되어 있는 값이 아래의 텍스트 영역의 값으로 업데이트 됩니다.

## 어려웠던 점과 해결방법(에러 핸들링)

1. Tag : TagContainer 안에 input 태그와 Close 버튼이 함께 있는 상태에서 input태그에 커서를 놓았을 때 focus가 되는 부분을 없애고 TagContainer가 focust 처리되는 기능을 구현하려고 하였으나 잘되지 않았습니다. CSS 의사클래스(가상클래스) focus-within을 활용하여 문제를 해결하였습니다.
(추가로 볼만한 것들 - :focus, :focus-visible)

2. AutoComplete : 추천항목 리스트 드랍다운 CSS 구현이 어려웠습니다. input 태그를 감싸는 container의 border값을 top-left, top-right를 변화시켜 주어서 위에 있는 input태그와 아래로 펼쳐지는 드랍다운이 하나의 모양인것 처럼 구현해서 해결하였습니다.

3. ClickToEdit : 지금까지 custom 컴포넌트와 달리 2개의 return문을 가지고 있습니다. MyInput 컴포넌트와 ClickToEdit 컴포넌트 이렇게 2개입니다. 마치 컴포넌트 폴더와 page 폴더로 나누어진 것과 같습니다. MyInput 컴포넌트는 ClickToEdit의 자식 컴포넌트로 props를 전달받습니다. props 전달없이 단 한개의 컴포넌트 안에 모든 상태값을 넣었다면 다소 복잡해질 수 있는 코드 구조를 잘게 나누어서 구현했습니다.

## 실행 방법

#### Toggle
![Toggle](https://user-images.githubusercontent.com/87353284/153992229-db862ad4-fc16-44da-aaa3-537df00f9393.gif)

#### Modal
![Modal](https://user-images.githubusercontent.com/87353284/153992287-3d34b6ef-a55b-4b27-82c7-363caf2fb016.gif)

#### Tab
![Tab](https://user-images.githubusercontent.com/87353284/153992323-60b28ecd-12ba-468d-b85a-eb3329e18aa9.gif)

#### Tag
![Tag](https://user-images.githubusercontent.com/87353284/153992411-d859282d-3c5a-48b5-9a2c-d4688a5e1da8.gif)

#### AutoComplete
![AutoComplete](https://user-images.githubusercontent.com/87353284/153992488-8cc94a02-e5f6-4b43-bc51-d1a147299d1d.gif)

#### ClickToEdit
![ClickToEdit](https://user-images.githubusercontent.com/87353284/153992529-edbc3d4c-8d06-4ea9-bf24-359407b653a1.gif)


