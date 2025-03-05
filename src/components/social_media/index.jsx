import styles from './social_media.module.css'
import { getImageUrl } from '../../utils/functions'
import {socialMedia} from '../../data/data.js'

const SocialMedia = () => {
    return(
        <>
        <div className = {styles.image_div}>
            {socialMedia.map((item,index) => {
                return(
                        <img key={index} src={getImageUrl(item.image)}></img>
                )
            })}
        </div>
        </>
    )
}

export default SocialMedia;