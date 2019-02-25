import React , { Component } from 'react';

class Player extends Component {
    state = {
        pseudo: this.props.name,
        xp: 0,
        strength: 0,
        health: 0
    };

    onChangeName = (event) => {
        this.setState({pseudo: event.target.value});
    };

    onChangeXp = (event) => {
        this.setState({xp: event.target.value});
    };

    onChangeStrength = (event) => {
        this.setState({strength: event.target.value});
    };

    onChangeHealth= (event) => {
        this.setState({health: event.target.value});
    };

    render() {
        return (
            <div className="Player">
                Pseudo: <input onChange={(event) => this.onChangeName(event)} value={this.state.pseudo}/>
                Experience: <input onChange={(event) => this.onChangeXp(event)} value={this.state.xp}/>
                Strength: <input onChange={(event) => this.onChangeStrength(event)} value={this.state.strength}/>
                Health: <input onChange={(event) => this.onChangeHealth(event)} value={this.state.health}/>
            </div>
        );
    }
}
export default Player;