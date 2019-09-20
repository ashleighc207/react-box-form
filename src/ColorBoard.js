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
    this.addNewBox = this.addNewBox.bind(this)
  }

  addNewBox(box) {
    console.log(box)
  }

  render(){
    return(
      <div className="ColorBoard">
        <BoxForm addNewBox={this.addNewBox}/>
        {this.state.boxes.map(box =>{
          return <ColorBox />
        })}
      </div>
    )
  }
}

export default ColorBoard;
