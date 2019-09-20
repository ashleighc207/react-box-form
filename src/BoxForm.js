import React, { Component } from 'react';
import './BoxForm.css';
const uuid = require('uuid/v4');

class BoxForm extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      width: '',
      height: '',
      color: '',
      id: uuid()
    }
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleFocus(evt){
    evt.target.previousSibling.classList.add('active')
  }

  handleBlur(evt){
    if(evt.target.value === "") {
      evt.target.previousSibling.classList.remove('active')
    }
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.addNewBox(this.state)
    this.setState({
      width: '',
      height: '',
      color: ''
    })
    let labels = document.getElementsByTagName('label');
    for(let i = 0; i < labels.length; i++){
      labels[i].classList.remove('active')
    }
  }

  render(){
    return(
      <div className="BoxForm">
      <h1 className="BoxForm--heading_one"> Create a new box! </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="BoxForm--input_group">
            <label htmlFor="width-input">Width</label>
            <input
              type="text"
              name="width"
              id="width-input"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={this.state.width}
            />
          </div>
          <div className="BoxForm--input_group">
            <label htmlFor="height-input">Height</label>
            <input
              type="text"
              name="height"
              id="height-input"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={this.state.height}
              />
          </div>
          <div className="BoxForm--input_group">
            <label htmlFor="color-input">Color</label>
            <input
              type="text"
              name="color"
              id="color-input"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={this.state.color}
            />
            <span className="BoxForm--input_helper_text">This field supports color hex codes only</span>
          </div>
          <button className="BoxForm--submit_btn">Add box</button>
        </form>
      </div>
    )
  }
}

export default BoxForm;
