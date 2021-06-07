import React from 'react';
import classes from './header.module.scss';

const Header = () => {
    return (
        <header className={classes.header}>
            <span className={classes.logo}>Logo</span>
            <div className={classes.headerText}>
                <p>This is Header.</p>
            </div>
        </header>
    )

}


export default Header;