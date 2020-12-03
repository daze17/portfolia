import React from 'react'
import {Link} from 'react-router-dom'
import classes from './SideDrawer.module.css'


const SideDrawer = ({isShown, closeDrawer}) => {
    let drawerStyles = [classes.side_drawer]

    if (isShown) {
      drawerStyles = [classes.side_drawer, classes.open]
    }
    return(
        <nav className={drawerStyles.join(' ')}>
            <ul>
                <li onClick={closeDrawer}>
                    <span className={classes.underline}>
                        <Link to="/about">About</Link>
                    </span>
                </li>
            
            <li onClick={closeDrawer}>
                    <span className={classes.underline}>
                        <Link to="/">My Work</Link>
                    </span>
                </li>
                <li onClick={closeDrawer}>
                    <span className={classes.underline}>
                        <Link to="/about">Contact</Link>
                    </span>
                </li>
                <li onClick={closeDrawer}>
                <a className={classes.resume} href="resume.pdf">
                    Resume
                </a>
                </li>
            </ul>
        </nav>
    )
}
export default SideDrawer