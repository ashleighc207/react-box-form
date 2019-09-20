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
    this.setState(prevState => {
      return { boxes: [...prevState.boxes, box] }
    })
  }

  removeBox(box){
    console.log(box)
  }

  render(){
    return(
      <div className="ColorBoard">
        <BoxForm addNewBox={this.addNewBox}/>
        <div className="ColorBoard--container">
          {this.state.boxes.map(box =>{
            return <ColorBox
                    backgroundColor={box.color}
                    height={box.height}
                    width={box.width}
                    key={box.id}
                    id={box.id}
                    removeBox={this.removeBox}
                  />
          })}
        </div>
      </div>
    )
  }
}

export default ColorBoard;
