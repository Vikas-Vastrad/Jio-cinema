import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={styles.below}>
                <div className={styles.below1}>
                    <h1>JioCinema</h1>
                    <br/>
                    <p>For You</p>
                    <p>Sports</p>
                    <p>Movies</p>
                    <p>TV Shows</p>
                </div>
                <div className={styles.below2}>
                    <h1>Support</h1>
                    <br/>
                    <p>Help Center</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Content Complaints</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
