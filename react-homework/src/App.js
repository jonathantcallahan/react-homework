import React, { Component } from 'react';
import Image from './components/image/Image'
import images from './images.json'
import Header from './components/header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {
          images.map(e => (
            <Image name={e.name} img={e.img}/>
          ))
        }
      </div>
    );
  }
}

export default App;
