import React from 'react';

import styles from './App.less';

export default props => (
    <div className={styles.base}>
        <h1>Memory Game</h1>
        {props.children}
    </div>
);
