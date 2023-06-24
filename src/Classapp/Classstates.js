import React, { Component } from 'react'

 class Classstates extends Component {
    constructor(){
        super();
        this.state={
            name:"venkat",
            age:"45"
        }
    }
  render() {
    return (
      <div>
        <h1 onClick={()=>this.setState({name:"Venkat sai king" ,age:"25"})}>{ this.state.name} and age is {this.state.age} Class State component</h1>
      </div>
    )
  }
}
export default Classstates;