import React,{Component} from 'react';
import Classprops from './Classprops';
import Classstates from '../Classapp/Classstates';

class Classapp extends Component{
    render(){
        return(
            <div>
            <Classprops name="Royal Sai" age="40" love="yes" isSuccess={true}/>
            <Classstates />
        </div>

        )
        
        
    }
}
export default Classapp;