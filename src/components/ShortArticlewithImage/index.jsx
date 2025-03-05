import styles from './sports.module.css';
import {getImageUrl} from '../../utils/functions'

const ShortArticleWithImage = ({article}) => {

    return (
                <div className={styles.sports_div}>
                    <div className={styles.headline} >{article.headline.toUpperCase()}</div>
                    <img className={styles.image} src={getImageUrl(article.image)}></img>
                    <div className={styles.deck} >{article.deck.toUpperCase()}</div>
                    <div className={styles.category} > <span className ={styles.category_name}> Category : </span> {article.category.toUpperCase()}</div>
                </div>
    );
};

export default ShortArticleWithImage;