import { articles } from '../../data/data';
import styles from './navigation.module.css';
import NavItem from './navigationItem';

const Navigation = ({selectedLink}) => {
    const uniqueCategories = [...new Set(articles.map(item => item.category))];
    const todays = new Date().toLocaleDateString('en-gb',{weekday:"long", year:"numeric",month:"short", day:"numeric"});
 

    return (
        <>
            <div className={styles.nav_menu}>
                <NavItem title="HOME" onClick={() => selectedLink("HOME")} />

                {uniqueCategories.map((category, index) => (
                    <NavItem key={index} title={category.toUpperCase()} onClick={ () => selectedLink(category)} />
                ))}

                <div className={styles.date}>{todays}</div>
            </div>
        </>
    )
}

export default Navigation;