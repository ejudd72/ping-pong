import React, { Component } from 'react';
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { esperanto, english } from "../../data/languages"

class GameStart extends Component {
    //constructor should always contain props and superprops
    constructor(props){
        super(props);
        
        this.state = {
            player1Name: this.props.player1Name,
            player2Name: this.props.player2Name,
            winScore: this.props.winScore,
            alternate: this.props.alternate,
        }

        this.handleName1Change = this.handleName1Change.bind(this);
        this.handleName2Change = this.handleName2Change.bind(this);
        this.handleWinScoreChange = this.handleWinScoreChange.bind(this);
        this.handleAltChange = this.handleAltChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName1Change(e){
        this.setState({ 
            player1Name: e.currentTarget.value, 
        });
    }

    handleName2Change(e){
        this.setState({ 
            player2Name: e.currentTarget.value,
        });
    }

    handleWinScoreChange(e){
        this.setState({ 
            winScore: e.currentTarget.value,
        });
    }

    handleAltChange(e){
        this.setState({ 
            alternate: e.currentTarget.value,
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleSave({...this.state});
    }

    render() {
        let { player1Name, player2Name, winScore, alternate } = this.state;
        let { defaultLang, gameStarted } = this.props;

        return (
            gameStarted ? null : ( 
            <form 
                onSubmit={ this.handleSubmit }
                className="card" style={{ padding: 20, margin: 20 }}
            >
            <InputGroup>
                <label>
                    { defaultLang ? `${english.player} 1 ${english.name}` : `${esperanto.player} 1 ${esperanto.name}` }
                </label>

                <FormControl  
                    type="text"
                    onChange={ this.handleName1Change }
                    value={ player1Name }
                />  
            </InputGroup>
            <InputGroup>
                <label>
                    { defaultLang ? `${english.player} 2 ${english.name}` : `${esperanto.player} 2 ${esperanto.name}` }
                </label>

                <FormControl  
                    type="text"
                    onChange={ this.handleName2Change }
                    value={ player2Name }
                />  
            </InputGroup>
            <InputGroup>
                <label>
                    { defaultLang ? english.winningScore : esperanto.winningScore }
                </label>

                <FormControl  
                    type="number"
                    onChange={ this.handleWinScoreChange }
                    value={ winScore }
                />  
               
            </InputGroup>
            <InputGroup>
                <label>
                    { defaultLang ? english.alternateEvery : esperanto.alternateEvery }
                </label>

                <FormControl  
                    type="number"
                    onChange={ this.handleAltChange }
                    value={ alternate }
                />  
               
            </InputGroup>
            <Button 
                type="submit"
            >Save Settings </Button>
            </form>
            )
        )
    }
}

export default GameStart;