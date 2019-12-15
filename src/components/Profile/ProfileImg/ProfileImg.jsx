import React from 'react';
import styles from './ProfileImg.module.css';

const ProfileImg = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.path} alt="img" />
    </div>
  )
}

export default ProfileImg;
