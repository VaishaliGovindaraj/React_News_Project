import styles from './featured.module.css';
import Recent_News from '../recent_news';
import Main_Content from '../main_content';
import {MainArticle, sportsArticles, recentArticles } from '../../data/data'
import ShortArticleWithImage from '../ShortArticlewithImage';


const Featured = ({chosenArticle}) => {
  
    return(
    <div className={styles.featured_div}>
        <div className = {styles.leftContainer}>
            {recentArticles.map((item,index) => <Recent_News key={index} article={item} articleClick={chosenArticle} />)}
        </div>
        <Main_Content article={MainArticle} articleClick={chosenArticle} />
        <div className = {styles.rightContainer}>
            {sportsArticles.map((item,index) => <ShortArticleWithImage key={index} article={item} articleClick={chosenArticle} />)}
        </div>
    </div>
    )
}

export default Featured;