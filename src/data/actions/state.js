export const chooseGame = ({gameId, player1Name, player1, player2, winScore, player2Name, serve, alternate}) => ({
    type: "chooseGame",
    gameId,
    player1Name,
    player1, 
    player2,
    player2Name,
    winScore,
    serve,
    alternate,
});

export const incrementPlayer = ({ player_1, player_2 }) => ({
    type: 'incrementPlayer',
    player1: player_1.score,
    player2: player_2.score,
    serve: player_1.serving ? 1 : 2,
    winner: player_1.won ? 1 : (player_2.won ? 2 : 0),
})

export const reset = () => ({
    type: "reset"
})

export const langToggle = () => ({
    type: "langToggle"
})

export const saveSettings = ({ player_1, player_2, change_serve, winning_score, id }) => ({ 
    type: "saveSettings",
    player1Name: player_1.name,
    player2Name: player_2.name, 
    alternate: change_serve,
    winScore: winning_score,
    gameId: id
})

export const loadedUnfinished = (unfinishedGames) => ({
    type: "loadedUnfinished",
    unfinished: unfinishedGames
})

export const loaded = (prevGames) => ({
    type: "loaded",
    previous: prevGames,
})

export const deleted = () => ({
    type: "deleted",
})