import React from 'react';
import styles from './Nav.module.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
  <nav>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink to="/profile" className={styles.link} activeClassName={styles.active}>Profile</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/dialogs" className={styles.link} activeClassName={styles.active}>Messages</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/news" className={styles.link} activeClassName={styles.active}>News</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/music" className={styles.link} activeClassName={styles.active}>Music</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Nav;
