import React, { Component } from 'react';
import './ColorBoard.css';
import ColorBox from './ColorBox.js'

class ColorBoard extends Component {
  render(){
    return(
      <div>
      Colorboard
        <ColorBox />
      </div>

    )
  }
}

export default ColorBoard;
