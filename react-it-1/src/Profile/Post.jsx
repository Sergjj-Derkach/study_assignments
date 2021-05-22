import React from 'react';
import classes from './Post.module.css';
const Post = () => {
    return (
        <div className = {classes.item}>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Itaque, sunt explicabo pariatur voluptate perspiciatis nobis.</div>
            <span className={classes.like}>Like</span>
        </div>
    )
}

export default Post;