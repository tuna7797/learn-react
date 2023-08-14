
// 내부에 분리된 컴포넌트 호출
import ConditionalRendering from './parts/ConditionalRendering';
import DisplayingData from './parts/DisplayingData';

/* 데이터 ---------------------------------------------------------------------- */

let imageType = 'react'; // 'react' | 'vite'

let isShowReactImage = true;

const statusMessage = [
  '⌛️ 대기', // pending
  '⏳ 로딩 중...', // loading
  '✅ 로딩 성공!', // success (resolve)
  '❌ 로딩 실패.', // error (fail, reject)
];

const reactLibrary = {
  name: 'React',
  author: '조던 워케(Jordan Walke)',
  writtenIn: 'JavaScript',
  type: 'JavaScript 라이브러리',
  license: 'MIT',
};

/* 컴포넌트 --------------------------------------------------------------------- */

function DefinitionList() {
  const renderList = () => {
    return null;
  };

  return (
    <dl className="descriptionList">
        
        <DisplayingData statusMessage={statusMessage} />
        <ConditionalRendering imageType={imageType} />
        
        <dt>조건부 표시(conditional display)</dt>
        <dd>
          <p>
            표시(display) 여부에 따라 이미지가 화면에서 감춰지거나 표시됩니다.
          </p>
          {/* isShowReactImage 상태 값에 따라 이미지가 화면에 표시되거나 표시되지 않도록 설정합니다. */}
          <picture>
            <source type="image/avif" srcSet="/react.avif" />
            <source type="image/webp" srcSet="/react.webp" />
            <img src="/react.png" alt="React" height={42} />
          </picture>
        </dd>
        <dt>리스트 렌더링(list rendering)</dt>
        <dd>
          <p>상태 메시지(status message) 배열을 리스트 렌더링합니다.</p>
          <ul className="renderList">{renderList()}</ul>
        </dd>
        <dd>
          <p>상태 메시지(status message) 배열을 역순 정렬하여 렌더링합니다.</p>
          <ul className="renderList">{renderList({ reverse: true })}</ul>
        </dd>
        <dd>
          <p>
            React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
            렌더링합니다.
          </p>
          <dl className="reactLibrary">
            {/* 여기서 설명 목록으로 리스트 렌더링 합니다. */}
          </dl>
        </dd>
      </dl>
  )
}

export default DefinitionList;