import React from 'react';
import classes from './Maincontent.module.css';
import Post from './Post';

const MainContent = () => {
    return (
        <div>
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
                <Post message='Привет, как твои дела?' likes='15' />
                <Post message='У меня все хорошо' likes='23' />
            </div>
        </div>
    )

}


export default MainContent;