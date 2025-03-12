
import ShortArticleWithImage from "../ShortArticlewithImage";
import styles from './categories.module.css';

const Categories =({title, categoryArray, chosenArticle}) => {

    return(
        <>
        <h2 className={styles.category_title}>{title}</h2>
        <div className ={styles.category_div}>
            {categoryArray.filter((item,index) => index < 3).map((item,index) => <div key={index} className={styles.sports_div}><ShortArticleWithImage key={index} article={item} articleClick={chosenArticle} /> </div>)}
        </div>
        <div>{chosenArticle}</div>
        </>
    )

}

export default Categories;