export const incrementP1 = () => {
    return {
        type: "incrementP1"
    }
}

export const incrementP2 = () => {
    return {
        type: "incrementP2"
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

export const saveSettings = (settings) => {
    return { 
        type: "saveSettings",
        player1Name: settings.player1Name,
        player2Name: settings.player2Name, 
        alternate: settings.alternate,
        winScore: settings.winScore,
    }
};


// export const saveSettings = ({ settings }) => {
//     return {
//       type: "saveSettings",
//       player1Name: settings[0],
//       player2Name: settings[1], 
//       alternate: settings[2],
//       winScore: settings[4],
//       gameStarted: settings[5]
//     }; };