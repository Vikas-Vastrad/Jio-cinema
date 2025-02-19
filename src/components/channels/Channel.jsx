import React from 'react'
import styles from './channel.module.css'
import channel1 from '../../assets/channel1.jpg'
import channel2 from '../../assets/channel2.png'
import channel3 from '../../assets/channel3.jpg'
import channel4 from '../../assets/channel4.jpg'
import channel5 from '../../assets/channel5.jpg'
import channel6 from '../../assets/channel6.jpg'
import channel7 from '../../assets/channel7.jpg'

const Channel = () => {
  return (
    <div className={styles.channels}>
       <img src={channel1} alt='channel1' />
       <img src={channel2} alt='channel2' />
       <img src={channel3} alt='channel3' />
       <img src={channel4} alt='channel4' />
       <img src={channel5} alt='channel5' />
       <img src={channel6} alt='channel6' />
       <img src={channel7} alt='channel7' />
    </div>
  )
}

export default Channel;
