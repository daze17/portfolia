import React from 'react'
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import styles from './Nav.module.css'
//className={styles.underline}
const Nav = ({toggleDrawer, shadow }) => (
    <header
    className={
      shadow ? [styles.toolbar, styles.shadow].join(' ') : styles.toolbar
    }
  >
    <nav className={styles.navbar}>
      <div className={styles.burger}>
        <DrawerToggleButton click={toggleDrawer} />
      </div>
      <div className={styles.logo}>
        <span >
          <Link to="/">Bilguun Baasansuren</Link>
        </span>
      </div>
      <div className={styles.spacer} />
      <div className={styles.nav_items}>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/mywork" >My Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a className={styles.resume} href="resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

)
export default Nav
