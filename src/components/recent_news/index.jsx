import styles from './recent_news.module.css';


const Recent_News = ({ index, article }) => {

    return (
        <div className={styles.recent_news_div}>
            <div className={styles.headline} key={index} >{article.headline.toUpperCase()}</div>
            <div className={styles.deck} key={index} >{article.deck}</div>
            <div className={styles.category} key={index} >{article.category.toUpperCase()}</div>
        </div>
    );
};

export default Recent_News;