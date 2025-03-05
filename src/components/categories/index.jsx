
import ShortArticleWithImage from "../ShortArticlewithImage";
import styles from './categories.module.css';

const Categories =({title, categoryArray}) => {

    return(
        <>
        <h2 className={styles.category_title}>{title}</h2>
        <div className ={styles.category_div}>
            {categoryArray.filter((item,index) => index < 3).map((item,index) => <div key={index} className={styles.sports_div}><ShortArticleWithImage article={item} /> </div>)}
        </div>
        </>
    )

}

export default Categories;