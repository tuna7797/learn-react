// import RootLayout from './layout/RootLayout';
// import LearnStateAndEffects from './pages/LearnStateAndEffects';

// function App() {
//   return (
//     <div className="App">
//       <RootLayout>
//         <LearnStateAndEffects />
//       </RootLayout>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import { Atomic1, Atomic2 } from './learn/AtomicIs';
import SearchList from './learn/SearchList';
import './styles/global.css';

function App() {
  const [actionState, setActionState] = useState({
    homework: false,
    vacation: false,
  });

  const handleActionState = (
    actionName /* 'homework', 'vacation' */,
    nextAction /* true, false */
  ) => {
    setActionState({
      ...actionState /* { homework, vacation } */,
      [actionName]: nextAction,
    });
  };

  return (
    <>
      <SearchList />
      <Atomic1 action={actionState.homework} onAction={handleActionState} />
      <Atomic2 action={actionState.vacation} onAction={handleActionState} />
    </>
  );
}

export default App;