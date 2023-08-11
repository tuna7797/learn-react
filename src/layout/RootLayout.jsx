
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

function RootLayout(props) {
  console.log(props);
  return (
    <div>
      <HeaderBar />
      <main></main>
      <FooterBar />
    </div>
  )
}

export default RootLayout;