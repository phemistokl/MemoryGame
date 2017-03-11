export const START_GAME = 'START_GAME';
export const REVEAL_TILE = 'REVEAL_TILE';
export const MATCH_CHECK = 'MATCH_CHECK';

export const startGame = () => ({
    type: START_GAME
});

export const revealTile = tileId => ({
    type: REVEAL_TILE,
    tileId
});

export const matchCheck = () => ({
    type: MATCH_CHECK
});
