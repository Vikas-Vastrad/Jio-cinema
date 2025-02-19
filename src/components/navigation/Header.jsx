import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import jc from '../../assets/jc_logo_v2.svg'

const Header = (props) => {

  let navLinks = ['Home', 'Sports', 'Movies', 'TV Shows', 'More'];
  let [searchTitle, setSearchTitle] = useState("");
  
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <div className={styles.head}>
            <img src={jc} className={styles.logo} alt='Example' />
            <div className={styles.premium}>
              <p> Go Premium</p>
            </div>
          </div>

          <ul className={styles.navLinks}>
            {navLinks.map((link) => {
              return <li className={styles.navlinks}>{link}</li>
            })}
          </ul>
        </nav>

        <div className={styles.search}>
          <div className={styles.searchBox}>
            <img src='https://static.vecteezy.com/system/resources/previews/048/055/292/non_2x/search-icon-sign-free-vector.jpg' className={styles.searchIcon} alt='ex1' />
            <input type='text' onChange={(event) => {
              setSearchTitle(event.target.value);
            }} className={styles.searchInput} placeholder='Movies, Shows and more' />
            <img src='https://cdn-icons-png.flaticon.com/512/3817/3817556.png' className={styles.micIcon} alt='ex2' />
          </div>

          <div className={styles.profile}>
            <img src='https://t4.ftcdn.net/jpg/11/96/87/65/360_F_1196876506_4StPGnc3zIiJBBky4q3QgYOBtEBSLl2B.jpg' className={styles.loginIcon} alt='ex3' />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
