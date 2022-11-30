import React, { memo } from 'react';

import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.navigation}>
        <li>Log in</li>
        <li>Sign up</li>
        <li>About</li>
        <li>Contract us</li>
      </ul>
    </header>
  );
}

export default memo(Header);
