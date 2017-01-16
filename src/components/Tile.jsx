import React, { Component } from 'react';

import Card from './Card.jsx';

import styles from './Tile.less';

export default class Tile extends Component {
    handleReveal = () => {
        const { id, isRevealed, onReveal } = this.props;

        if (!isRevealed) {
            onReveal(id)
        }
    }

    getTileCard() {
        const { isRevealed } = this.props;

        if (isRevealed) {
            return 'active';
        }

        return 'white';
    }

    render() {
        return (
            <span
                className={styles.tile}
                onClick={this.handleReveal}
            >
                <Card size={40} type={this.getTileCard()} />
            </span>
        );
    }
}
