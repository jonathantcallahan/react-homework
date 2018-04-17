import React from 'react'

class Header extends React.Component {
    
    render(){
        return(
            <div className='header'>
                <div id='home'>Clicky Game</div>
                <div id='center-text'>Click an image to begin!</div>
                <div id='score'>
                    <p>Score: {this.props.score}</p>
                    <p>High Score: {this.props.hScore}</p>
                </div>
            </div>
        )
    }
}

export default Header