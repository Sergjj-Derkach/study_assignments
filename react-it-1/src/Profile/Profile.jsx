import React from 'react';
import classes from './Profile.module.css';
import NewUserPost from './ProfileInfo/NewUserPost/NewUserPost';
import Post from './ProfileInfo/Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div>
            <div className={classes.contentHeader}></div>
            <ProfileInfo />
            <div className={classes.userPosts}>
                <NewUserPost />
                <Post message='Привет, как твои дела?' likes='15' />
                <Post message='У меня все хорошо' likes='23' />
            </div>
        </div>
    )

}


export default Profile;