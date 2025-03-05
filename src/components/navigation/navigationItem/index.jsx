import styles from './naviItem.module.css';

const NavItem = ({title, link ="#"}) => {
    return (
        <a className={styles.naviItem} href={link}>{title}</a>
    )
}

export default NavItem;