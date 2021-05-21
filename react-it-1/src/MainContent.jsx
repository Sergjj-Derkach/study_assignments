import React from 'react';
import classes from './maincontent.css';

const MainContent = () => {
    return (
        <div className="content">
            <div className="contentHeader"></div>
            <div className="profile">
                <div className="profileFoto">
                    <span className="foto"></span>
                </div>
                <div className="profileDiscription">Discription</div>
            </div>
            <div>
                my post
                <div>new post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    )

}


export default MainContent;