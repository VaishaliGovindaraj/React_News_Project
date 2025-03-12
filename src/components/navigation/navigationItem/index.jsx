import styles from './naviItem.module.css';

const NavItem = ({title, onClick}) => {

    console.log(title);

    return (
        <button className={styles.naviItem} onClick={onClick}>{title}</button>
    )


}

export default NavItem;