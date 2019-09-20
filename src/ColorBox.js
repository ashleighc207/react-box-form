import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(evt){
    this.props.removeBox(this.props.id)
  }

  render(){
    let styles = {'backgroundColor': this.props.backgroundColor, 'height': this.props.height + 'px', 'width': this.props.width + 'px'};
    return(
      <div id={this.props.id}>
        <div className='ColorBox' style={styles}>

        </div>
        <i className="material-icons" onClick={this.handleRemove}>close</i>
      </div>
    )
  }
}

export default ColorBox;
