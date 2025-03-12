
import styles from './selectedcategory.module.css';
import ShortArticleWithImage from '../ShortArticlewithImage';

const SelectedCategoryComponent = ({title,displayArray,chosenArticle}) => {

    return(
        <>
        <h2 className={styles.category_title}>{title}</h2>
        <div className ={styles.category_div}>
          {displayArray.map((item,index) => <div key={index} className={styles.article_div}><ShortArticleWithImage key ={index} article={item} articleClick={chosenArticle}/> </div>)} 
        </div>
        </>
    )
}

export default SelectedCategoryComponent;