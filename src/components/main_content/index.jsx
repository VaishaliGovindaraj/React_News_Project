import styles from './main_content.module.css';
import {getImageUrl} from '../../utils/functions'

const Main_Content = ({article,articleClick}) => {

    const handleClick = () => {
        articleClick(article);
    }

    return (
        <div className={styles.main_content_div}> 
                <div className={styles.news_div}>
                    <div className={styles.headline} onClick={handleClick} >{article.headline.toUpperCase()}</div>
                    <img className={styles.image} src={getImageUrl(article.image)}></img>
                    <div className={styles.deck} >{article.deck.toUpperCase()}</div>
                    <div className={styles.story} >{article.story}</div>
                    <div className={styles.category} > <span className ={styles.category_name}> Category : </span> {article.category.toUpperCase()}</div>
                </div>
        </div>
    );
};

export default Main_Content;