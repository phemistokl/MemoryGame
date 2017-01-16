import React from 'react';

import GameState from './GameState.jsx';

import styles from './Footer.less';

export default props => {
    return (
        <div className={styles.base}>
            <GameState />
        </div>
    );
};
