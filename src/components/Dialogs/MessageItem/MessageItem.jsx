import React from 'react';
import styles from './MessageItem.module.css';

const MessageItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <span className={styles.circle}></span>
        <p>{props.textMessage}</p>
      </div>
    </div>
  )
}

export default MessageItem;
