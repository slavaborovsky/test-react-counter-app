import React, { memo } from 'react';
import Counter from '../../components/Counter';

import styles from './styles.module.scss';

function Container() {
  return (
    <div className={styles.container}>
      <Counter />
    </div>
  );
}

export default memo(Container);
