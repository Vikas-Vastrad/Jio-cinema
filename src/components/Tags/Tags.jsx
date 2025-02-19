import React, { useState } from 'react'
import styles from './tags.module.css'

const Tags = () => {

    let [tags, setTags] = useState([
        "For You",
        "Premium",
        "Laughter Chefs",
        "Cricket",
        "MTV Roadies XX",
        "FREE Movies",
        "Bigg Boss",
        "News",
        "BBK",
        "Kids & Family",
        "AUS vs IND",
        "FREE Anime",
        "Biographies",
        "Drama"
    ])
    return (
        <div className={styles.tagbar}>
            {
                tags.map((tag) => {
                    return <p className={styles.tag}>{tag}</p>
                })
            }
        </div>
    )
}

export default Tags;
