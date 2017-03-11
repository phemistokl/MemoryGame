import { fromJS } from 'immutable';

import { startGame, revealTile, matchCheck } from '../utils/memorygame';

import {
    START_GAME,
    MATCH_CHECK,
    REVEAL_TILE
} from '../actions';

const DEFAULT_STATE = fromJS({
    board: []
    // cols: 4,
    // rows: 4
});

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case START_GAME: {
            // const { rows, cols } = action;

            return startGame();
        }

        case REVEAL_TILE: {
            return revealTile(state, action.tileId);
        }

        case MATCH_CHECK: {
            return matchCheck();
        }

        default: {
            return state;
        }
    }
};
