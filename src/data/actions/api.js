import axios from "../../axios";
import { saveSettings, incrementPlayer, loaded, deleted, loadedUnfinished } from "./state";

export const postGame = ({ player1Name, player2Name, alternate, winScore }) => dispatch => {
    axios.post("/games", {
        player_1: player1Name,
        player_2: player2Name,
        winning_score: winScore,
        change_serve: alternate,
    }).then(({ data }) => {
        dispatch(saveSettings(data.data))
    });
};

export const patchIncrementPlayer = player => (dispatch, getState) => {
    const id = getState().gameId;

    axios.patch(`/games/${id}/score`, {
        player: player
    }).then(({ data }) => {
        dispatch(incrementPlayer(data.data))
    });
}

export const getPrevGames = () => dispatch => {
    axios.get("/games").then(({ data }) => {
        let completedGames = data.data.filter(game => game.complete);

        let prevGames = completedGames.map(
            game => ({
                player1Name: game.player_1.name, 
                player2Name: game.player_2.name,
                winner: game.player_1.won ? 1 : (game.player_2.won ? 2 : 0),
                player1: game.player_1.score,
                player2: game.player_2.score,
                gameId: game.id,
            })
        )
        dispatch(loaded(prevGames));
    }); 
};

export const deleteGame = (id) => dispatch => {
    axios.delete(`/games/${id}`).then(() => {
        dispatch(deleted());
    }); 
};

export const checkUnfinished = () => dispatch => {
    axios.get("/games").then(({ data }) => {
        let unfinishedGames = data.data.filter(game => !game.complete);
        
        unfinishedGames = unfinishedGames.map(
            game => ({
                player1Name: game.player_1.name, 
                player2Name: game.player_2.name,
                winner: game.player_1.won ? 1 : (game.player_2.won ? 2 : 0),
                player1: game.player_1.score,
                player2: game.player_2.score,
                gameId: game.id,
                winScore: game.winning_score,
                serve: game.player_1.serving ? 1 : 2,
            })
        )

        dispatch(loadedUnfinished(unfinishedGames));
    }); 
};


