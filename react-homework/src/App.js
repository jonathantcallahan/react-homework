import React, { Component } from 'react';
import Image from './components/Image'
import images from './images.json'

class App extends Component {
  render() {
    return (
      <div>
        {
          images.map(e => (
            <Image img={e.img}/>
          ))
        }
      </div>
    );
  }
}

export default App;
