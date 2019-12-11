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

export const saveSettings = ({ player1Name, player2Name, alternate, winScore }) => {
    return { 
        type: "saveSettings",
        player1Name,
        player2Name, 
        alternate,
        winScore,
    }
};