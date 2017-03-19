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

export function matchCheck(game) {
    let isRevealed = [];

    game.get('board').toJS().forEach(i => {
        if (i.isRevealed === true && i.isMatched === false) {
            isRevealed.push(i.id);
            console.log(isRevealed);
        }
    });
    if (isRevealed.length < 2) return;
    if (game.getIn(['board', isRevealed[0], 'img_url']) === game.getIn(['board', isRevealed[1], 'img_url'])) {
        game.setIn(['board', isRevealed[0], 'isMatched'], true);
        game.setIn(['board', isRevealed[1], 'isMatched'], true);
        //console.log(game.getIn(['board', isRevealed[1], 'isMatched']));
    } else {
        game.setIn(['board', isRevealed[0], 'isRevealed'], false);
        game.setIn(['board', isRevealed[1], 'isRevealed'], false);
        //console.log(game.getIn(['board', isRevealed[1], 'isRevealed']));
    }
}
