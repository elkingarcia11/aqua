import styles from '@/styles/Header.module.css';
export default function Headers() {
    return (
        <div className={`${styles.header}`}>
             <img src="/HeaderLogo.png" alt="Aqua logo" />
        </div>
    )
}