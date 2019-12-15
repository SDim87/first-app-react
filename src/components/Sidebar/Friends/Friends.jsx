import React from 'react';
import styles from './Friends.module.css';

const Friends = () => {
  return (
  <div className={styles.container}>
    <h3 className={styles.title}>Friends</h3>
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.avatar}></span>
        <span className={styles.name}>Gendalf</span>
      </li>
      <li className={styles.item}>
        <span className={styles.avatar}></span>
        <span className={styles.name}>Shrek</span>
      </li>
      <li className={styles.item}>
        <span className={styles.avatar}></span>
        <span className={styles.name}>Fiona</span>
      </li>
      <li className={styles.item}>
        <span className={styles.avatar}></span>
        <span className={styles.name}>Malificenta</span>
      </li>
    </ul>
  </div>
  )
}

export default Friends;
