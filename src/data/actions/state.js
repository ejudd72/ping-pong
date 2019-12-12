export const incrementPlayer = ({ player_1, player_2 }) => {
    return {
        type: 'incrementPlayer',
        player1: player_1.score,
        player2: player_2.score,
    }
}

export const reset = () => {
    return {
        type: "reset"
    }
}

export const langToggle = () => {
    return {
        type: "langToggle"
    }
}

export const saveSettings = ({ player_1, player_2, change_serve, winning_score, id }) => {
    return { 
        type: "saveSettings",
        player1Name: player_1.name,
        player2Name: player_2.name, 
        alternate: change_serve,
        winScore: winning_score,
        gameId: id
    }
};