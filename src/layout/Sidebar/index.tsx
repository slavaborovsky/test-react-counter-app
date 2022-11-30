import React, { memo } from 'react';

import imageSrc from '../../assets/images/test.jpeg';
import MyImage from '../../components/Image';

import styles from './styles.module.scss';

function SideBar() {
  return (
    <aside className={styles.aside}>
      <ul className={styles.navigation}>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>

      {/* <MyImage src={imageSrc} alt="" isRotated /> */}
    </aside>
  );
}

export default memo(SideBar);
