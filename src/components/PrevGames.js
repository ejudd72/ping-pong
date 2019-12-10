import React from "react";

const PrevGames = ({ previous }) => (
    
        previous.map((current, index) => (
            <p key={index}> { current } </p>
        )
    )
    
)

export default PrevGames;