import { fromJS, Map, List } from 'immutable';

import repeat from './repeat';

let _board =[];

function generateBoard() {
    let images = [];
    for (let i = 1; i < 9; i++) {
        images.push("images/" + i + ".jpg");
    }
    images = images.concat(images)
    .sort(() => Math.random() - 0.5);
    for (let i = 0; i < images.length; i++) {
        _board.push({
            image: images[i],
            isRevealed: false,
            isMatched: false
        });
    }
}

generateBoard();

export function startGame() {
    const game = fromJS({
      board: _board
    });

    return game;
}

export function revealTile(game, tileId) {
    return game.setIn(['board', tileId, 'isRevealed'], true);
}

export function matchCheck() {
    console.log("Hello");
}
