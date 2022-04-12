# React-custom components
## 화면 요약
### Web
<img src="https://user-images.githubusercontent.com/87353284/162345615-7bb0c511-cbbc-49ee-ab96-34c7ec6c0969.gif" width="50%"/>

### Resonsive
<img src="https://user-images.githubusercontent.com/87353284/162367564-4b511dcf-3d9e-4115-b80d-6b3696c074eb.gif" width="50%"/>

Mobile 버전에서 좌측 상단의 메뉴를 클릭하면 메뉴바가 활성화됩니다.

<img src="https://user-images.githubusercontent.com/87353284/162757077-c5cb585d-0c83-40c9-8f9e-bd164233e356.gif" width="30%"/>

메뉴바 기능을 구현하는 과정에서 리액트 컴포넌트 렌더링 에러 이슈가 있었습니다.
```
Cannot update a component (xxx) while rendering a different component (xxx)
```

리액트에서 다른 구성요소를 렌더링하는 동안 특정 구성 요소를 업데이트 할 수 없다는 의미의 에러입니다. 
전역저장소(Redux toolkit 사용)에 영향을 주는 2개의 컴포넌트와 useSelector로 전역저장소를 참조하는 1개의 컴포넌트에서
데이터의 흐름을 단방향으로 흐르게끔 코드를 구현하여 해결하였습니다.

[에러핸들링 깃허브 이슈 링크](https://github.com/holystorySeo/react-custom-component/issues/13)

[에러핸들링 블로그 링크[detail version]](https://jobcoding.tistory.com/230)

## 화면 설명
React.js를 활용하여 custom component를 구현하고 있습니다.  
기능 구현에 직접적인 영향을 주는 라이브러리는 사용하지 않고 있습니다.

[페이지 링크](https://react-custom-component.vercel.app/)

React-custom-components 목록
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
useState를 사용하여 토글 버튼의 on/off 상태값을 체크합니다. 토글 버튼 제어를 위해서 toggleHandler라는 이벤트 핸들러를 사용하여 클릭할 때마다 상태값을 True/False로 체크했습니다. toggle 상태를 설명하는 description(toggle Switch on || toggle Switch off)은 조건부 연산자를 활용하여 구현하였습니다.

#### 기술 이슈
1.CSS: 토글 원이 이동을 하면서 배경색이 원의 중간까지만 채워지는 느낌의 효과   
<br>
[수정 전]: 한번에 배경색이 변합니다.

![Toggle 수정 전](https://user-images.githubusercontent.com/87353284/155888438-f5439d12-be82-4ca9-8b6f-54c47cedfb05.gif)  
<br>

[수정 후]: 토글 원의 이동과 함께 원의 중간까지만 배경색이 변합니다.

![Toggle 수정 후](https://user-images.githubusercontent.com/87353284/155888153-40f63f11-e920-45d8-959a-a366e4462960.gif)  

#### 해결 방법
background의 linear-gradient와 background-size 200%로 설정하여 해결하였습니다. linear-gradient(to left,  ${subColor} 50%, ${mainColor} 50%) right은 오른쪽에서 왼쪽으로 gradient 효과를 주는데 subColor 50%를 시작으로 mainColor 50%으로 색깔이 점차 변한다는 의미입니다. 그런데 이 설정의 상태에서 background-size를 200%(100%이 아님)으로 주면 mainColor 50%을 준게 결국에는 mainColr 100%와 동일한 효과를 주게 되는 것입니다.

토글 버튼을 누르면 background: linear-gradient(to right,  ${mainColor} 50%, ${subColor} 50%) left으로 바뀌는데 이건 왼쪽에서 오른쪽으로 mainColor에서 subColor로 바뀐다는 의미인데 처음과는 반대로 subColor 50%을 준게 background-size 200% 설정에 영향을 받아 subColor 100%와 동일하게 됩니다.

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
#### 설명
Modal 컴포넌트는 useState를 사용하여 모달 창의 open/close 여부를 확인할 수 있도록 하였습니다.
모달창과 배경을 제어하기 위해 이벤트 핸들러 modalHanlder를 사용하였습니다.
모달 Background 컴포넌트는 modal이 열릴 때 뒤의 배경을 어둡게 만들어 줍니다.
github 이미지를 클릭하면 본인의 github로 이동합니다.

클릭하면 open Modal 버튼이 색상이 변하면서 활성화되는 것을 보실 수 있습니다.

<img src="https://user-images.githubusercontent.com/87353284/162758556-e5290ced-4e12-4ee4-b508-d0750a0698d7.gif" width="40%" />


#### 구현 화면
#### Web
<img src="https://user-images.githubusercontent.com/87353284/162754099-79c98597-81a5-4ca2-8220-157b5bb8aada.gif" width="40%" />

#### Mobile
<img src="https://user-images.githubusercontent.com/87353284/162754602-5fae4b4a-8f34-4ff8-bd7e-f57b56e23321.gif" width="20%"/>


### `Tab`
#### 설명
Tab 컴포넌트는 탭 메뉴 정보를 menuArr이라는 배열에 미리 담았고 특정 탭을 클릭할 때마다 index가 변경되는 상태값 체크를 위해 useState를 사용하였습니다. li 태그로 메뉴를 생성하고, 각 메뉴 탭을 클릭하였을 경우 뷰가 전환되도록 index 상태값을 변경시키주는 이벤트 핸들러 tabHanlder를 사용하였습니다. 조건부 연산자를 활용하여 클릭한 탭 메뉴만 변하도록 submenu-focused 클래스 변환을 구현하였습니다.

#### 추가 구현 기능
1. 문제의 정답을 확인할 수 있는 문제 풀이 기능을 추가하여서 모듈의 기능을 풍성하게 하였습니다.

#### Web
<img src="https://user-images.githubusercontent.com/87353284/162759586-7b4a1d62-4ed3-4a9d-9b70-270878b88816.gif" width="40%" />

#### Mobile
<img src="https://user-images.githubusercontent.com/87353284/162768247-14ca08e5-ef42-4c0b-9b55-225b21dc15e9.gif" width="20%" />

2. 이미지 스프라이트 기법을 적용하여 '문제 이미지' 적용

background-image의 url 속성을 주고 각 문제마다 background-position과 background-size를 알맞게 설정하여 이미지 로딩 횟수를 줄였습니다.
```js
.contents0 {
    width: 130px;
    height: 100px;
    background-position: -30px -24px;
    background-image: url('https://user-images.githubusercontent.com/87353284/162628899-dcdd39db-3363-48a1-b3de-2e850889ec97.jpeg');
    background-size: 500%;
  }

  .contents1 {
    width: 230px;
    height: 120px;
    background-position: -35px -195px;
    background-image: url('https://user-images.githubusercontent.com/87353284/162628899-dcdd39db-3363-48a1-b3de-2e850889ec97.jpeg');
    background-size: 300%;
  }

  .contents2 {
    width: 130px;
    height: 120px;
    background-position: -700px -60px;
    background-image: url('https://user-images.githubusercontent.com/87353284/162628899-dcdd39db-3363-48a1-b3de-2e850889ec97.jpeg');
    background-size: 340%;
  }
```

#### 기술 이슈
1. 보기를 선택한 상태에서 다른 보기를 선택하면 선택한 보기외에 나머지 보기를 선택하지 않은 상태로 변경하기
2. 이미 체크한 보기를 다시 선택하면 선택하지 않은 상태로 변경하기

   <img src="https://user-images.githubusercontent.com/87353284/162765878-78a0ae15-18a9-4399-a76e-e27d258bc681.gif" />

#### 해결 방법
document.querySelectorAll(`input[type=checkbox]`).forEach로 순회하여 el.checked = false로 할당하였습니다. checkedValue 상태변수에 현재 선택된 보기의 value값을 할당하고 클릭 이벤트 콜백함수로 전달된 인자의 value값과 checkedValue 값이 같으면 '이미 클릭된 요소를 다시 클릭한 것으로 확인'하여 checked 여부를 false로 변경하는 방식으로 해결하였습니다.

```js
    if (checkedValue === target.value) {
      // 이미 클릭된 요소를 다시 클릭하면 checked 여부 false로 변경
      target.checked = false;
      setCheckedValue('');
    } else {
      // 클릭되지 않은 요소를 클릭하면 그 요소를 제외한 나머지는 checked false로 변경
      document.querySelectorAll(`input[type=checkbox]`).forEach((el) => {
        el.checked = false;
      });
      target.checked = true;
      setCheckedValue(target.value);
    }
```

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


