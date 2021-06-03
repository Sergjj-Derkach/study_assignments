import React from 'react';
import classes from './NewUserPost.module.css';

const NewUserPost = ()=>{
    return(
        <div className={classes.newPost}>
            <textarea rows="3" placeholder="Add new post" className={classes.textPost}></textarea>
            <button className={classes.addBtn}>Add</button>
        </div>
    )
}

export default NewUserPost;