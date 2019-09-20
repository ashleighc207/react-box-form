import React, { Component } from 'react';
import './BoxForm.css';
const uuid = require('uuid/v4');

class BoxForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      width: '',
      height: '',
      color: ''
    }
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.addNewBox(this.state)
    this.setState({
      width: '',
      height: '',
      color: ''
    })
  }

  render(){
    return(
      <div className="BoxForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="width-input">Width</label>
          <input
            type="text"
            name="width"
            id="width-input"
            onChange={this.handleChange}
            value={this.state.width}
          />
          <label htmlFor="height-input">Height</label>
          <input
            type="text"
            name="height"
            id="height-input"
            onChange={this.handleChange}
            value={this.state.height}
          />
          <label htmlFor="color-input">Color</label>
          <input
            type="text"
            name="color"
            id="color-input"
            onChange={this.handleChange}
            value={this.state.color}
          />
          <button>Add box</button>
        </form>
      </div>
    )
  }
}

export default BoxForm;
