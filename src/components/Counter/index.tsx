import React, { useEffect, useRef } from 'react';
import sum from 'lodash/sum';
import useCounter from '../../hooks/useCounter';

import MyButton from '../Button';

import styles from './styles.module.scss';

function Counter() {
  const { count, increment, decrement, reset } = useCounter();
  const offsetRef = useRef<any>();
  const changeRef = useRef([]);

  useEffect(() => {
    if (offsetRef?.current) {
      offsetRef.current.value = 1;
    }
  }, [offsetRef]);

  useEffect(() => {
    changeRef.current.push(1);
  }, [count, changeRef]);

  return (
    <div className="counter-container">
      <label htmlFor="offset">
        Enter offset:
        <input
          id="offset"
          className={styles['offset-input']}
          type="number"
          step={1}
          placeholder="Type a number"
          ref={offsetRef}
        />
      </label>

      <div className="count-container">
        <h2 className={styles['count-label']}>
          Current count <span className={styles.count}>{count}</span>
        </h2>
        <h3 className="count-change-time">
          Count has been changed{' '}
          <span className={styles['change-time']}>{sum(changeRef.current)}</span> times
        </h3>
      </div>

      <div className="count-actions">
        <MyButton type="button" primary onClick={() => increment(+offsetRef.current.value)}>
          Increment
        </MyButton>
        <MyButton type="button" secondary onClick={() => decrement(+offsetRef.current.value)}>
          Decrement
        </MyButton>
        <MyButton type="button" tertiary onClick={() => reset()}>
          Reset
        </MyButton>
      </div>
    </div>
  );
}

export default Counter;
