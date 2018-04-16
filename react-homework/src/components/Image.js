import React from 'react'
import './css/image.css'

class Image extends React.Component {
    render(){
        return(
            <div className='image-container'>
                <img className='ind-img' src={this.props.img}/>
            </div>
        )
    }
}

export default Image;