import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles['title']}>
        DND Monsters
      </Link>
    </header>
  );
};

export default Header;
