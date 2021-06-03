import React from 'react';
import classes from './Post.module.css';
const Post = (props) => {
    
    return (
        <div className = {classes.item}>
            <div>{props.message}</div>
            <span className={classes.like}>Like <span>{props.likes}</span></span>
        </div>
    )
}

export default Post;