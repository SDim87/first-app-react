import React from 'react';
import styles from './Sidebar.module.css';
import Nav from './Nav/Nav';
import Friends from './Friends/Friends';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Nav/>
      <Friends/>
    </div>
  )
}

export default Sidebar;
