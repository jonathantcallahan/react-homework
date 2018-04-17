import React from 'react'
import './image.css'

class Image extends React.Component {
    render(){
        return(
            <div className='image-container'>
                <img name={this.props.name} className='ind-img' src={this.props.img}/>
            </div>
        )
    }
}

export default Image;