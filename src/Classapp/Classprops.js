import React,{Component} from 'react';
import Successcomp from './Successcomp';
import Failedcomp from './Failedcomp';

class Classprops extends Component{
    constructor(){
        super();
        console.log(this);

    }
    render(){
        // return<h1>{this.props.name} Age is {this.props.age} and {this.props.isSuccess ? "true" :"false"}</h1>
        return<h1>{this.props.name} Age is {this.props.age} and {this.props.isSuccess ? <Successcomp /> :<Failedcomp />}</h1>
    }
}
export default Classprops;