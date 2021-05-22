import React from 'react';
import classes from './maincontent.module.css';
import Post from './Post';

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
                <div className={classes.newPost}>
                    <textarea rows="3" placeholder="Add new post" className={classes.textPost}></textarea>  
                    <button className={classes.addBtn}>Add</button>  
                </div> 
                <Post />                   
                <Post />                   
                <Post />                   
            </div>
        </div>
    )

}


export default MainContent;