// 주제: 컴포넌트의 상태 관리
// - useState 훅을 사용해서 관리
// - useState 훅은 항상 배열을 반환 [상태값, 상태업데이트함수]
// - useState 훅의 실행 결과를 구조분해할당하는 것이 일반적이다.

// https://react.dev/reference/react/useState#setstate

// useState 관련하여 공식문서를 한번만 더 설명 부탁드리고 싶습니다.
// 오늘 배운 컴포넌트 상태 이해하기 쉬운 예시 보여주세요.
import { useState } from 'react';

//? useState : 상태함수 리엑트의 상태를 관리하고 생성하는 특별한 함수. 
//? 항상 배열을 반환한다. 항상 첫번째 들어오는 것은 상태, 
//? 두번째 들어오는 것은 상태를 업데이트 할 수 있는 함수가 들어온다.

function Counter() {
  // let count = 9;
  // const countState = useState(9);
  // console.log(countState);
  const [count, setCount] = useState(9);

  return (
    <div className="Counter">
      <button
        type="button"
        aria-label="카운트 감소"
        onClick={() => {
          // let updateCount = --count;
          // console.log({ updateCount });
          // setCount(count - 1);
          // setAge(a => a + 1);
          setCount((prevState) => prevState - 1);
        }}
      >
        -1
      </button>
      <output
        style={{ fontSize: '32px', display: 'inline-block', marginInline: 10 }}
      >
        {/* {count} */}
      </output>
      <button
        type="button"
        aria-label="카운트 증가"
        onClick={() => {
          // let updateCount = ++count;
          // console.log({ updateCount });
          // setCount(count + 1);
          // setCount((prevState /* prevCount */) => {
          //   return prevState + 1; /* nextCount */
          // });

          setCount((c) => c + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Counter;