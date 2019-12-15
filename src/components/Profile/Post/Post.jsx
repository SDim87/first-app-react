import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <span className={styles.circle}></span>
        <p>{props.message}</p>
        <span className={styles.count}>{props.count}</span>
      </div>
    </div>
  )
}

export default Post;
