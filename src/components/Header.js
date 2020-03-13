import React from 'react';
import IconBreadcrumbs from '../components/Breadcrumb';
import styles from '../components/Header.css';

const Header = () => {
  return (
    <header className={styles.Title}>
      <IconBreadcrumbs />  
    </header>
  );
};

export default Header;
