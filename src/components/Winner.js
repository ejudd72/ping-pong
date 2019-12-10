import React from "react";

const Scores = ({ winner, reset }) => (
    <React.Fragment>
        
        { winner > 0 ? 
        <h2 className="alert alert-success">Player { winner } wins!</h2>

        : null } 
    </React.Fragment>
);

export default Scores;