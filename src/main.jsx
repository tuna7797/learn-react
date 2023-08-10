/* eslint-disable no-inner-declarations */
/* React, ReactDOM 모듈 불러오기 및 버전 확인 -------------------------------------- */

// React 모듈을 불러오기
import * as React from 'react';

// ReactDOM 모듈을 불러오기
import * as ReactDOM from 'react-dom';

// React 버전 확인하기
// console.log(`React version: ${React.version}`);

// ReactDOM 버전 확인하기
// console.log(`ReactDOM version: ${ReactDOM.version}`);




/* React 요소란? --------------------------------------------------------------- */

// React 요소 작성 (React API)
const visualBoldElement = React.createElement('b', null, '어썸(awesome)');

const headlineElement = React.createElement(
  'h1', 
  {
    title: 'React is Awesome!',
  },
  'React는',
  visualBoldElement,
  '해~'
);

const domAbbrElement = React.createElement(
  'abbr',
  { title: 'Document Object Model'},
  'DOM'
);

const uiAbbrElement = React.createElement(
  'abbr',
  { title: 'User Interface'},
  'UI'
);

const descriptionForReactElement = React.createElement(
  'p', 
  {}, 
  'React는 가상 ',
  domAbbrElement,
  '을 사용하는 ',
  uiAbbrElement,
  '라이브러리입니다.'
);

const appElement = React.createElement(
  /* type */ 
  'div', 
  /* props {} */ 
  { 
    className: 'App', 
    id: 'reactAppElement', 
    'data-type': 'React.ReactElement' 
  },
  /* ...children -> [child, child, child, ...] */
  headlineElement,
  descriptionForReactElement
);

// appElement(rootElement) tree
// console.log('appElement\n', appElement);




/* JSX를 사용하는 이유 ------------------------------------------------------------ */

// React 요소 작성 (with JSX)
const appElementJSX = (
  <div 
    className="App" 
    id="reactAppElement"
    data-type="React.ReactElement"
  >
    <h1 title="React is Awesome!">
      React는 <b>어썸(awesome)</b>해~
    </h1>
    <p>
      React는 가상 
      <abbr title="Document Object Model">DOM</abbr>
      을 사용하는 
      <abbr title="User Interface">UI</abbr> 
      라이브러리입니다.
    </p>
  </div>
);

// console.log('appElementJSX\n',appElementJSX);


/* React 요소를 재사용하기 위한 함수 작성 --------------------------------------------- */

{
  // const domAbbrElement = React.createElement(
  //   'abbr',
  //   { title: 'Document Object Model'},
  //   'DOM'
  // );
  
  // const uiAbbrElement = React.createElement(
  //   'abbr',
  //   { title: 'User Interface'},
  //   'UI'
  // );

  // - [ ] React 요소를 반환하는 함수 만들기
  //   1. 함수 작성 createAbbrElement()
  function createAbbrElement(props, ...children) {
    return React.createElement('abbr', props, ...children);
  }

  const domAbbrElement = createAbbrElement({
    title: 'Document Object Model'
  }, 'D', 'O', 'M');

  console.log(domAbbrElement);
  
  const uiAbbrElement = createAbbrElement({
    title: 'User Interface'
  }, 'UI');
  console.log(uiAbbrElement);
  
  // - [ ] 인수를 전달해 재사용 가능하도록 구현
  //   2. createAbbrElement({ props: { title: '...' } }, '...');
}


/* React 요소 vs. 컴포넌트 -------------------------------------------------------- */

// App 함수 컴포넌트 만들기



/* React 요소 트리를 DOM에 렌더링하려면? ---------------------------------------------- */

// ReactDOM.createRoot() 를 사용해서 DOM 요소를 ReactDOMRoot 객체로 생성
// ReactDOMRoot.render() 메서드로 App을 화면에 표시(렌더링)
