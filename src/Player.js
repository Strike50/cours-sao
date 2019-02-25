import React, { Component } from 'react';
import './App.css';

class Player extends Component {
    render() {
        return (
            <div className="Player">
                <form>
                    <div>
                        <label for="Pseudo">Pseudo</label>
                        <input type="text" id="Pseudo" name="Pseudo"></input>
                    </div>
                    <div>
                        <label htmlFor="Pseudo">Xp</label>
                        <input type="text" id="Xp" name="Xp"></input>
                    </div>
                    <div>
                        <label htmlFor="Pseudo">Strength</label>
                        <input type="text" id="Strength" name="Strength"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Player;
