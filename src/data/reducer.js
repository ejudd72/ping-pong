import initial from "./initial";

const saveSettings = (state, { player1Name, player2Name, alternate, winScore }) => ({ 
    ...state, 
    player1Name,
    player2Name,
    alternate,
    winScore,
    gameStarted: true,
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
                "won": state.winner === 1
                },
                "player_2": {
                "score": state.player2,
                "won": state.winner === 2,
                }
            }
        }
    }
 
   switch (action.type) {
    case "incrementP1": return winner(serving({ 
        ...state, 
        player1: state.player1 + 1, 
    })); 
    case "incrementP2": return winner(serving({ 
        ...state, 
        player2: state.player2 + 1, 
    }));
    case "reset": return { 
        ...initial, 
        defaultLang: state.defaultLang,
        gameStarted: false,
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        previous: [previous(state).previous, ...state.previous] 
    };
    case "langToggle": return { 
        ...state, 
        defaultLang: !state.defaultLang, 
    };
    case "saveSettings": return saveSettings(state, action);

    default: return state;
 } };

 export default reducer;