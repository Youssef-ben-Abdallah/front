'use client';
import styles from '../page.module.css';
function OdrerLayout({ children }) {
    return (
        <div className={styles.main}>
            {children}
        </div>

    );
}
export default OdrerLayout; 