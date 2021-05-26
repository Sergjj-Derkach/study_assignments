import React from 'react';
import{NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/new" activeClassName={classes.active}>New</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/setting" activeClassName={classes.active}>Settings</NavLink>
            </div>
        </nav>
    )

}


export default NavBar;