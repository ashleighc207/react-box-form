import React, { Component } from 'react';
import './ColorBoard.css';
import ColorBox from './ColorBox.js';
import BoxForm from './BoxForm.js';
const uuid = require('uuid/v4');


class ColorBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      boxes: []
    }
  }
  render(){
    return(
      <div className="ColorBoard">
        <BoxForm />
        <ColorBox />
      </div>
    )
  }
}

export default ColorBoard;
