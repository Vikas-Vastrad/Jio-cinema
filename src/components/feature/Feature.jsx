import React from 'react'
import styles from './Feature.module.css'
import FeaturedShow from '../featuredShow/FeaturedShow'

const Feature = (props) => {
    return (
        <>
        <h2 className={styles.secTitle}>Hot Right Now 🔥</h2>
        <section className={styles.features}>
        

            <div className={styles.shows}>
                {
                    props.movies.map((movie) => {
                        return <FeaturedShow movie = {movie}/>
                    })
                } 
            </div>
            
        </section>
        </>
    )
}

export default Feature
