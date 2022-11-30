import React, { memo } from 'react';

import { format } from 'date-fns';

import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.rights}>All rights reserved. (c) {format(new Date(), 'dd-MM-yyyy')}</p>
    </footer>
  );
}

export default memo(Footer);
