import React from 'react'

class Header extends React.Component {

    state = {
        score: 0,
        hScore: 0
    }

    render(){
        return(
            <div className='header'>
                <div id='home'>Clicky Game</div>
                <div id='center-text'>Click an image to begin!</div>
                <div id='score'>
                    <p>Score: {this.state.score}</p>
                    <p>High Score: {this.state.hScore}</p>
                </div>
            </div>
        )
    }
}

export default Header