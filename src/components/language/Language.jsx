import React from 'react'
import styles from './language.module.css'

const Language = () => {
    return (
        <div>
            <h2 className={styles.Title}>Watch in Your Language</h2>
            <div className={styles.lang}>
                <img src='https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/hindi_1x1-1709298653281.jpg' alt='lang11' />
                <img src='https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/kannada_1x1-1709298556759.jpg' alt='lang2' />
                <img src='https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/english-1694341614686.jpg' alt='lang3' />
                <img src='https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/marathi_1x1-1709298637014.jpg' alt='lang4' />
                <img src='https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/telugu_1x1-1709298686761.jpg' alt='lang5' />
            </div>
        </div>
    )
}

export default Language;
