import styles from './header.module.css';
import SocialMedia from '../social_media';

const Header = () => {
    return(
        <header className={styles.header}>
            <SocialMedia />
            <h1 className={styles.header_title}>News of the World</h1> 
            <div className={styles.date}>123-456-789</div>
        </header>
    )
}

export default Header;