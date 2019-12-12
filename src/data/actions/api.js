import axios from "../../axios";
import { saveSettings, incrementPlayer } from "./state";

export const postGame = ({ player1Name, player2Name, alternate, winScore }) => dispatch => {
    // now use axios to make an API request
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
        console.log(data.data);
        dispatch(incrementPlayer(data.data))
    });
}


