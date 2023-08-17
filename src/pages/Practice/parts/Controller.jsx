import { getNode } from "./utils";
import GoToButton from "./GoToButton";

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      
      <GoToButton 
        onPointerEnter={() => console.log('pointer enter')}
        onClick={function() {
          // side effect
          const practiceElement = getNode('.Practice');
          console.log(practiceElement)
        }} 
      />

      <GoToButton 
        direction="up" 
        label="스크롤 업" 
        onClick={() => {
          console.log('go to up');
        }} 
      />
    </div>
  );
}

export default Controller;