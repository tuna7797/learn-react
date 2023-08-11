/* eslint-disable react/prop-types */

import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

function RootLayout(props) {
  
  return (
    <div>
      <HeaderBar />
      <main>
        {props.children}
      </main>
      <FooterBar />
    </div>
  )
}

export default RootLayout;