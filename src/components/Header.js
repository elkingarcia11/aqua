import styles from '@/styles/Header.module.css';
export default function Headers() {
    return (
        <div className={`${styles.header}`}>
             <img src="/header.png" alt="Aqua logo" />
        </div>
    )
}