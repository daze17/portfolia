import React from 'react'
import Icon from '@material-ui/core/Icon'
import classes from './DrawerToggleButton.module.css'

const DrawerToggleButton = ({click}) => (
    
    <div className={classes.container}>
        <button className={classes.toggle_button} onClick={click}>
            <Icon className="fas fa-bars"/>
        </button>
    </div>
)
export default DrawerToggleButton