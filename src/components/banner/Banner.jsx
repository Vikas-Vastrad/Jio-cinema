import React from 'react'
import styles from './banner.module.css'

const Banner = () => {
  return (
    <div>
      <div className={styles.banner}>
        <img src='https://pbs.twimg.com/media/GBsB-L-aMAAX4gN.jpg:large' alt='banner' />
        <img src='https://www.myhoardings.com/OOHAdvertising/wp-content/uploads/2024/04/IPL-Advertising.jpg' alt='banner' />
      </div>
    </div>
  )
}

export default Banner

