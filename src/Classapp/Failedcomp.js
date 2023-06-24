import React, { Component } from 'react';

const myStyle={
    border:"1px solid",
    width:"300px",
    height:"400px",
    backgroundColor:"yellow",
    Color:"red",
}

 class Failedcomp extends Component {
  render() {
    return (
      <div style={myStyle}>Failedcomp</div>
    )
  }
}

export default Failedcomp;