import React from 'react';

import Tile from './Tile.jsx';

import styles from './Board.less';

export default props => {
    const { rows, onReveal, onMatched } = props;

    return (
        <div className={styles.base}>
            {
                rows.map((row, idx) =>
                    <div key={idx} className={styles.row}>
                        {
                            row.map(tile =>
                                <Tile
                                    key={tile.get('id')}
                                    id={tile.get('id')}
                                    isRevealed={tile.get('isRevealed')}
                                    onReveal={onReveal}
                                    onMatched={onMatched}
                                    imgUrl={tile.get('img_url')}
                                />
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};
