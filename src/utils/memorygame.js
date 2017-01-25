import { fromJS, Map, List } from 'immutable';

import repeat from './repeat';

export function makeCouple() {
    const cell = Map({ isRevealed: false, card_key: (Math.random() * 60), card_url: "https://unsplash.it/115/115/?random" });
    const CoupleCells = repeat(2, cell);
    return CoupleCells;
}

export function generateBoard({ cols, rows }) {
    const AllCells = [];
    //const AllCells = makeCouple();
    for (var i = 0; i <=7; i++) {
        const ver = makeCouple();
        return AllCells.concat(ver);
    }
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
