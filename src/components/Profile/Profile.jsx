import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import User from './User/User';
import Post from './Post/Post';
import ProfileImg from './ProfileImg/ProfileImg';

const Profile = (props) => {
  let posts = props.profilePage.posts.map((postObj) => {
    return <Post message={postObj.message} count={postObj.likesCount} key={postObj.id} />;
  });

  return (
    <div>
      <ProfileImg path="https://picsum.photos/seed/picsum/1440/400" />
      <div className={styles.content__inner}>
        <User />
        <MyPosts
          addPost={props.addPost}
          newPostText={props.profilePage.newPostText}
          updateNewPostChange={props.updateNewPostChange}
        />
        {posts}
      </div>
    </div>
  )
}

export default Profile;
