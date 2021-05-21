import React from 'react';
import classes from './maincontent.module.css';

const MainContent = () => {
    return (
        <div className={classes.content}>
            <div className={classes.contentHeader}></div>
            <div className={classes.profile}>
                <div className={classes.profileFoto}>
                    <span className={classes.foto}></span>
                </div>
                <div className={classes.profileDiscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam architecto ipsa error quo nostrum consequatur dolorum molestias tenetur cupiditate
                 atque illo similique non ad perspiciatis, veritatis voluptatibus, iusto, assumenda sint.</div>
            </div>
            <div className={classes.userPosts}>
                <div className={classes.lastPost}>
                    <div className={classes.autorPost}></div>
                    <div className={classes.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, natus?</div>
                </div>
                <div className={classes.newPost}>
                    <div className={classes.autorPost}></div>
                    <div className={classes.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, natus?</div>
                </div>
                <div className={classes.postsList}>
                    <div className={classes.item}>
                        <div className={classes.autorPost}></div>
                        <div className={classes.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, natus?</div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.autorPost}></div>
                        <div className={classes.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, natus?</div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default MainContent;