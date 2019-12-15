import React from 'react';
import styles from './MyPosts.module.css';


const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addMyPost = (e) => {
    e.preventDefault();
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostChange(text);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title} style={{ fontSize: '24px', fontWeight: '700' }}>My posts</h2>
      <form action="" method="POST" className={styles.form}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          className={styles.textarea}
          placeholder="Your news..."
          name="text-posts"
          value={props.newPostText}>
        </textarea>
        <button onClick={addMyPost} className={styles.btn}>Send</button>
      </form>
    </div>
  )
}


export default MyPosts;
