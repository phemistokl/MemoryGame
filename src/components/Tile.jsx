import React, { Component } from 'react';

import Card from './Card.jsx';

import styles from './Tile.less';

export default class Tile extends Component {
    handleReveal = () => {
        const { id, isRevealed, onReveal, imgUrl, onMatched } = this.props;

        if (!isRevealed) {
            onReveal(id),
            setTimeout(() => {
              onMatched();
            }, 1000)
        }
    }

    getTileCard() {
        const { isRevealed } = this.props;

        if (isRevealed) {
            return 'white';
        }

        return 'active';
    }

    render() {

        return (
            <span
                className={styles.tile}
                onClick={this.handleReveal}
            >
                <Card size={40} type={this.getTileCard()} imgUrl={this.props.imgUrl} />
            </span>
        );
    }
}
