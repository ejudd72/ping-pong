import initial from "./initial";

const increment = (state, { player1, player2 }) => ({
    ...state, 
    player1: player1,
    player2: player2
})

const saveSettings = (state, { player1Name, player2Name, alternate, winScore, gameId }) => ({ 
    ...state, 
    player1Name,
    player2Name,
    alternate,
    winScore,
    gameStarted: true,
    gameId,
 });

const reducer = (state, action) => {
    
    const serving = state => {
        let alt = state.player1 < 21 || state.player2 < 21 ? state.alternate : 2;

        return {
            ...state, 
            serve: Math.floor((state.player1 + state.player2 + 1) / alt) % 2 + 1
        }
    }

    const winner = state => {
        if ((state.player1 >= state.winScore || state.player2 >= state.winScore) && (Math.abs(state.player1 - state.player2) >= 2)) {
            return {
                ...state, 
                winner: state.player1 > state.player2 ? 1 : 2,
            }
        } else {
            return {
                ...state,
                winner: 0,
            }
        }
    }

    const previous = state => { 
      return  {
        ...state,
        previous: 
            {
                "player_1": {
                "score": state.player1,
                "won": state.winner === 1,
                "game_id": state.gameId,
                },
                "player_2": {
                "score": state.player2,
                "won": state.winner === 2,
                "game_id": state.gameId,
                }
            }
        }
    }

    const reset = state => {
        return { 
            ...initial, 
            defaultLang: state.defaultLang,
            gameStarted: false,
            player1Name: state.player1Name,
            player2Name: state.player2Name,
            previous: [previous(state).previous, ...state.previous],
            gameId: state.gameId + 1, 
        }
    }
 
   switch (action.type) {
    case "incrementPlayer": return winner(serving(increment(state, action))); 
    case "reset": return reset(state);
    case "langToggle": return { 
        ...state, 
        defaultLang: !state.defaultLang, 
    };
    case "saveSettings": return saveSettings(state, action);

    default: return state;
 } };

 export default reducer;