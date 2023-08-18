import styles from '@/styles/FooterBar.module.css';

function FooterBar() {
  return (
    // <footer className='container'>
    <footer className={styles.container}>
      <small>모든 저작권은 --에 있습니다.</small>
    </footer>
  );
}

export default FooterBar;