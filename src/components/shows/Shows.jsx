import React from 'react'
import styles from './shows.module.css'
import Show from '../show/Show'

const Shows = (props) => {
  return (
    <>

<h2>{props.title}</h2>
      <section className={styles.shows}>
        

        <div className={styles.showsParent}>
            {
                props.movies.map((movie) => {
                    return <Show movie={movie}/>
                })
            }
            
            
        </div>
      </section>
    </>
  )
}

export default Shows;
