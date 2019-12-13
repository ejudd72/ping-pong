import initial from "./initial";

const reducer = (state, action) => {

    const loadedUnfinished = (state, { unfinished }) => ({
        ...state,
        unfinished: unfinished,
        loaded: true,
        checkedUnfinished: !state.checkedUnfinished,
    })
    
    const chooseGame = (state, { gameId, player1, player2, player1Name, player2Name, winScore, alternate, serve }) => ({
        ...state,
        gameId,
        player1Name,
        player1,
        player2,
        player2Name,
        winScore, 
        alternate,
        serve,
        checkedUnfinished: false,
        gameStarted: true,
    })
        
    const deleted = state => ({
        ...state,
    })

    const increment = (state, { player1, player2, serve, winner }) => ({
        ...state, 
        player1,
        player2,
        serve,
        winner,
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

    const loaded = (state, { previous }) => ({
        ...state,
        previous: previous,
        loaded: true
    })

    const langToggle = state => ({ 
        ...state, 
        defaultLang: !state.defaultLang, 
    }) 

    const reset = ({ defaultLang, player1Name, loaded, player2Name, previous }) => ({
        ...initial, 
        loaded,
        defaultLang,
        gameStarted: false,
        player1Name,
        player2Name,
        previous,
        gameId: 0
    })
 
   switch (action.type) {
    case "incrementPlayer": return increment(state, action);
    case "reset": return reset(state);
    case "deleted": return deleted(state);
    case "loaded": return loaded(state, action);
    case "loadedUnfinished": return loadedUnfinished(state, action);
    case "chooseGame": return chooseGame(state, action);
    case "langToggle": return langToggle(state, action);
    case "saveSettings": return saveSettings(state, action);

    default: return state;
 } };

 export default reducer;