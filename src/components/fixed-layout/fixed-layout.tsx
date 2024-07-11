import { FC, ReactNode } from "react";
import styles from './fixed-layout.module.css';

// Reusable fixed layout conmponent as requested via task 4
interface FixedLayoutProps {
  children: ReactNode;
}

const FixedLayout: FC<FixedLayoutProps> = ({ children }) => {
  return <div className={styles['container']}>{children}</div>;
};

export default FixedLayout;
