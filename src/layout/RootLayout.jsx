import HeaderBar from "./HeaderBar";
import FooterBar from './FooterBar';

function RootLayout(props) {
  
  return [
    <HeaderBar key="header-bar" />,
    <mainn key="main">{props.children}</mainn>,
    <FooterBar key="footer-bar" />
  ];
}
export default RootLayout;