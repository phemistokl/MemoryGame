import { fromJS, Map, List } from 'immutable';

import repeat from './repeat';

export function generateBoard({ cols, rows }) {
    const cell = Map({ isRevealed: false});

    const AllCells = repeat(cols * rows, cell);

    return AllCells.map((tile, idx) => tile.set('id', idx));
}

export function startGame(params) {
    const game = fromJS({
      cols: params.cols,
      rows: params.rows,
      board: generateBoard(params)
    });

    return game;
}
