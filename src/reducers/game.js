import { fromJS } from 'immutable';

import { startGame } from '../utils/memorygame';

import {
    START_GAME,
    //TOGGLE_FLAGGED_TILE,
    REVEAL_TILE
} from '../actions';

const DEFAULT_STATE = fromJS({
    board: [],
    cols: 4,
    rows: 4
});

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case START_GAME: {
            const { rows, cols } = action;

            return startGame({ rows, cols });
        }

        case REVEAL_TILE: {
            return revealTile(state, action.tileId);
        }

        // case TOGGLE_FLAGGED_TILE: {
        //     return flagTile(state, action.tileId);
        // }

        default: {
            return state;
        }
    }
};
