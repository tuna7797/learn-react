// 목표: 함수 컴포넌트에서 순수함을 유지해야 하는 이유
//      - 리액트 팀에서 요구하는 컨벤션(규칙)
//      - 컨벤션 준수할 경우 따라오는 것들: 오류 방지, 테스트 용이 등 장점을 가짐
//      - 순수함이란? 순수 함수를 말함. (리액트 렌더링 과정이 문제없이 작동하도록)

function add(x, y) {
  // x, y 매개변수에 의해 순수하게 계산된 결과만 반환
  return x + y;
}

add(10, 1);
add(10, 1);

add(21, -8);
add(21, -8);

function plus(x, y) {
  // console.log(Math.random() * x + Math.random() * y);
  document.documentElement.setAttribute('dir', 'ltr');
  return x + y;
}

plus(9, -9);

/* -------------------------------------------------------------------------- */

export function ThisIsPure({ whatIsPure, isThisPure }) {
  return (
    <ul>
      <li>
        <h2>순수함이란?</h2>
        <p>{whatIsPure}</p>
      </li>
      <li>
        <h2>이것은 순수한가요?</h2>
        <p>{isThisPure ? '네!' : '아니오..'}</p>
      </li>
    </ul>
  );
}

export function ThisIsImpure({ whatIsPure, isThisPure }) {
  const message = `순수하다는 것은 예측하기 쉽다. - ${Math.random()}`;

  const body = document.body;
  body.classList.add('impure');

  return (
    <ul>
      <li>
        <h2>순수함이란?</h2>
        <p>
          {whatIsPure} {message}
        </p>
      </li>
      <li>
        <h2>이것은 순수한가요?</h2>
        <p>{isThisPure ? '네!' : '아니오..'}</p>
      </li>
    </ul>
  );
}

/* -------------------------------------------------------------------------- */

export function Greeting({ name, message }) {
  return (
    <p>
      {name}! {message}
    </p>
  );
}

export function ImpureGreeting({ name, message }) {
  // 렌더링 코드?
  // 리액트 함수 컴포넌트가 실행되어 결과를 반환하기 까지의 과정

  // 저기 패치 부분 코드를 뭐라고 불러야할까요 ?
  // 서버에 데이터를 요청하고 응답받는 처리하는 비동기 프로세스
  // 사이드 이펙트 (부수 효과 : 리액트 렌더링과 상관없는 과정들)
  // 불순 (렌더링과 상관 없음)
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => res.json())
    .then((user) => console.log(user.email))
    .catch((error) => console.error(error));

  return (
    <p>
      {name}! {message}
    </p>
  );
}

function getNode(selector, context = document) {
  return context.querySelector(selector);
}

function addClass(node, className) {
  node.classList.add(className);
  return node;
}

addClass(getNode('.yena'), 'girl');

async function sendMessage(emailAddress, message) {
  const response = await fetch(
    `https://send-message.com/api/message?email=${emailAddress}&message=${message}`
  );

  if (!response.ok) {
    throw new Error('이메일에 메시지 전송에 실패했습니다.');
  }

  return response;
}

console.log(sendMessage);