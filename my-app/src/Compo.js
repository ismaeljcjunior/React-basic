import React, { Component } from 'react'
import User from './User';

class Compo extends Component {
    render(){
        return (
            <div> 
                eu sou um 
                <User name="ismael"></User>
                <User name="jose"></User>
                <User name="maria"></User>
            </div>
        );
    }
}
export default Compo;
