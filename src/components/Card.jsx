import React from 'react';

import styles from './Card.css';

export default props => {

      return (
        <div className={styles.main__box}>
          <div className={`box ${props.type}`}>
            <img src={`${props.imgUrl}`} />
          </div>
        </div>
      )
}
