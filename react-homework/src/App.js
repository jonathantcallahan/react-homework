import React, { Component } from 'react';
import Image from './components/image/Image'
import images from './images.json'
import Header from './components/header/Header'
import './app.css'

class App extends Component {
  
  state = {
    clicked: [],
    score: 0,
    hScore: 0
   }
  
  updateClicked = name => {
    if(this.state.clicked.indexOf(name)>-1){
      alert('Aw you lost! Try again.')
      this.setState({
        clicked: []
      })
      if(this.state.score > this.state.hScore){
        this.setState({
          hScore: this.state.score
        })
      }
      this.setState({
        score: 0
      })
      return;
    } else {
      var score = this.state.score;
      score++;
      if(score > this.state.hScore){
        this.setState({
          hScore: score
        })
      }
      this.setState({
        score: score
      })
    }

    const clicked = this.state.clicked
    clicked.push(name)    
    this.setState({ clicked })
    console.log(this.state.clicked)
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} hScore={this.state.hScore}/>
        {
          images
            .map(e => (
            <Image updateClicked={this.updateClicked} name={e.name} img={e.img}/>
          ))
        }
      </div>
    );
  }
}

export default App;
