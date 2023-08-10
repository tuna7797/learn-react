import { createRoot } from 'react-dom/client';

// React 함수 컴포넌트의 요건
// - 함수 이름은 첫글자가 대문자!
// - JSX를 반환!

// App 함수 컴포넌트를 작성합니다.
function App() {
    // JSX 값 반환
  const returnValue = (
    <div>
      <h1>React</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab animi,
        labore facilis obcaecati ullam placeat molestiae. Enim, consectetur
        laudantium.
      </p>
      <ul>
        <li>list item A</li>
        <li>list item B</li>
        <li>list item C</li>
      </ul>
    </div>
  );

  return returnValue;
}


createRoot(document.getElementById('root')).render(
  // App 컴포넌트를 렌더링할 수 있도록 JSX 구문을 추가합니다.
  <App />
);