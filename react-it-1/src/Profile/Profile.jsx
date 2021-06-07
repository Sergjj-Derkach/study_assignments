import React from 'react';
import classes from './Profile.module.css';
import NewUserPost from './ProfileInfo/NewUserPost/NewUserPost';
import Post from './ProfileInfo/Post/Post';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    let postsData = [
        {
            id: 1,
            post: 'Привет, как твои дела?',
            likes: '15'
        },
        {
            id: 2,
            post: 'У меня все хорошо',
            likes: '23'
        }
    ]
    return (
        <div>
            <div className={classes.contentHeader}></div>
            <ProfileInfo />
            <div className={classes.userPosts}>
                <NewUserPost />
                <Post message={postsData[0].post} likes={postsData[0].likes} id={postsData[0].id} />
                <Post message={postsData[1].post} likes={postsData[1].likes} id={postsData[1].id} />
            </div>
        </div>
    )

}


export default Profile;