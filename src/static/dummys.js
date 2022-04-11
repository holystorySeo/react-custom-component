export const dummySrc = {
  image: [
    `http://image.kyobobook.co.kr/images/book/large/418/l9791190555418.jpg`,
    `http://image.kyobobook.co.kr/images/book/large/596/l9788965709596.jpg`,
    `http://image.kyobobook.co.kr/images/book/large/078/l9791160505078.jpg`,
    `http://image.kyobobook.co.kr/images/book/large/467/l9791191211467.jpg`,
    `http://image.kyobobook.co.kr/images/book/large/741/l9791196826741.jpg`,
    `http://image.kyobobook.co.kr/images/book/large/096/l9788984077096.jpg`,
    `http://image.kyobobook.co.kr/images/book/large/351/l9788963706351.jpg`,
  ],
  menus: [
    'Toggle',
    'Modal',
    'Tab',
    'Tag',
    'AutoComplete',
    'CarouselIdx',
    'CarouselSlider',
    'Loading',
  ],
  docs: [
    'Toggle 스위치 on/off 컴포넌트',
    'Modal open/close 컴포넌트',
    'Tab 선택 컴포넌트',
  ],
  question: [
    'Q1. 다음의 코드를 실행시킨 후에 result의 값은 무엇이 될까요?',
    'Q2 .다음의 코드를 실행시킨 후에 result의 값은 무엇이 될까요?',
    'Q3. 다음의 코드를 실행시킨 후에 result의 값은 무엇이 될까요?',
  ],
  options: [
    ['10', '20', '30', '40'],
    ['10', '20', '30', '40'],
    ['10', '20', '30', '40'],
  ],
  answer: [
    '답은 30입니다. 함수 get은 x를 반환하는데, 이때 x는 전역 스코프의 x를 가리킵니다. get 함수 스코프 내에는 x라는 변수가 별도로 선언되어 있지 않기 때문입니다. 따라서 변수 result에는 30이 할당됩니다. 그렇다면 get(20)에서, 전달인자 20은 무슨 역할을 할까요? 여기서 20은 사용되지 않는 값입니다. 20을 인자로 받아 함수에 전달해 주었지만, get 함수 내부의 어떤 변수에도 할당되지 않습니다.',
    '답은 30입니다. get함수는 전역에 선언된 x를 반환하고, set함수는 value라는 매개변수를 통해 받은 값을 변수 x에 할당합니다. 하지만 get함수의 x와 set함수의 x는 다릅니다. get의 x는 전역에 있는 변수 x를 가리키지만, set의 x는 let 키워드를 통해 set 함수 스코프 내에서 별도로 선언된 변수입니다. 때문에 set(10)을 실행해도 전역의 x값은 여전히 30이고, set 함수 스코프 내의 x값만 10으로 변경될 뿐입니다.',
    '답은 20입니다. outer 함수 스코프에는 20을 값으로 하는 변수 x와 함수 inner가 선언되어 있습니다. outer는 inner 함수를 실행시킨 값을 반환합니다. inner함수는 x를 반환합니다. 하지만 inner 함수 스코프 내에 x라는 변수가 없기 때문에, 이때 x는 바로 한 단계 위인 outer 함수 스코프의 x가 됩니다. 따라서 result는 20이 됩니다.',
  ],
};
