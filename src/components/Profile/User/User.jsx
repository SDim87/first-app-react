import React from 'react';
import styles from './User.module.css';
import avatar from './ava.webp';

const User = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img style={{width: '100%', display: 'block'}} src={avatar} alt=""/>
      </div>
      <div className="">
        <h2 className={styles.name}>Dmitriy S.</h2>
        <ul className={styles.data}>
          <li className={styles.item}>Data of birth: <span>17 september</span></li>
          <li className={styles.item}>City: <span>Penza</span></li>
          <li className={styles.item}>Job: <span>Frontend developer</span></li>
          <li className={styles.item}>telegram: <span>@diman_40in</span></li>
          <li className={styles.item}>email: <span>da_sorokin@mail.ru</span></li>
        </ul>
      </div>
    </div>
  )
}

export default User;
