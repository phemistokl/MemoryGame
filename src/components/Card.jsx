import React from 'react';

import styles from './Card.css';

export default props => {

      return (
        <div className={styles.main__box}>
          <div className={`box ${props.type}`}>
            <img src="https://unsplash.it/115/115/?random" />
          </div>
        </div>
      )
}
