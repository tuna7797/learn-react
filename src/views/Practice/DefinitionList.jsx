// 내부에 분리된 컴포넌트 호출
// 학습 주제별 컴포넌트
import ConditionalDisplay from './parts/ConditionalDisplay';
import ConditionalRendering from './parts/ConditionalRendering';
import DisplayingData from './parts/DisplayingData';
import RenderingLists from './parts/RenderingLists';

/* 데이터 ---------------------------------------------------------------------- */
import { imageType, isShowReactImage, statusMessage } from './parts/data';

/* 컴포넌트 --------------------------------------------------------------------- */

function DefinitionList() {
  // 배열 데이터 → 순환 → 새롭게 가공된 배열 반환하고자 한다면?
  // 어떻게 해야 할까요?
  const renderList = ({ reverse = false} = {}) => {

    // const renderListItem = message => (
    //   <li key={message}>{message}</li>
    // );

    // return statusMessage.map(renderListItem)

    // return [
    //   <li key={statusMessage[0]}>{statusMessage[0]}</li>,
    //   <li key={statusMessage[1]}>{statusMessage[1]}</li>,
    //   <li key={statusMessage[2]}>{statusMessage[2]}</li>,
    //   <li key={statusMessage[3]}>{statusMessage[3]}</li>,
    // ];
    const renderListItem = (message) => <li key={message}>{message}</li>;
    return (!reverse ? statusMessage : statusMessage.toReversed()).map(renderListItem);
  };
  
  const allHidden = false;

  return (
    <dl className="descriptionList">
      <DisplayingData hidden={allHidden} statusMessage={statusMessage} />
      {/* 조건부 렌더링(rendering) vs. 조건부 표시(display) */}
      {/* SSR (존재 혹은 존재하지 않음) vs. Client (화면에 표시 혹은 감춤) */}
      <ConditionalRendering hidden={allHidden} imageType={imageType} />
      <ConditionalDisplay hidden={allHidden} isShowReactImage={isShowReactImage} />
      <RenderingLists statusMessage={statusMessage} renderList={renderList} />
    </dl>
  );
}

export default DefinitionList;