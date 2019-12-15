import React from 'react';
import styles from './Header.module.css';
import logo from './logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div style={{ display: 'flex',}}> {/*Станет ссылкой*/}
        <img className={styles.header__logo} src={logo} alt="img"/>
      </div>
    </header>
  )
}

export default Header;
