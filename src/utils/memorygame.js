import { fromJS, Map, List } from 'immutable';

import repeat from './repeat';

let _url = [];

function generateUrl() {
    let images = [];
    for (let i = 1; i < 9; i++) {
        images.push("images/" + i + ".jpg");
    }
    images = images.concat(images)
    .sort(() => Math.random() - 0.5);
    for (let i = 0; i < images.length; i++) {
        _url.push({
            image: images[i]
        });
    }
}

generateUrl();

function generateId() {
    let currentCount = 0;

    function counter() {
        return currentCount++;
    }

    return counter;
}

let counter = generateId();


export function generateBoard({ cols, rows }) {
    const cell = Map({ isRevealed: false, isMatched: false });

    const AllCells = repeat(16, cell);

    return AllCells.map((tile, idx) => tile.set('id', idx).set('img_url', _url[counter()].image));
}

// export function generateBoard({ cols, rows }) {
//     const cell = Map({ isRevealed: false });
//
//     const AllCells = repeat(16, cell);
//
//     var images = [];
//
//     for (var i = 1; i < 9; i++) {
//         images.push("images/" + i + ".jpg");
//     }
//     images = images.concat(images)
//     .sort(() => Math.random() - 0.5);
//     for (var i = 0; i < images.length; i++) {
//             //console.log(images[i]);
//             return AllCells.map((tile, idx) => tile.set('id', idx).set('img_url', images[i]));
//     }
// }



export function startGame(params) {
    const game = fromJS({
      cols: params.cols,
      rows: params.rows,
      board: generateBoard(params)
    });

    return game;
}

export function revealTile(game, tileId) {
    return game.setIn(['board', tileId, 'isRevealed'], true);
}

export function matchCheck() {
    console.log("Hello");
}
