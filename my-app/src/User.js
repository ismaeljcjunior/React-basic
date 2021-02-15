import React, { Component } from 'react'
class User extends Component {
    render(){
        return (
            <div> 
                eu sou um componete
               Nome: {this.props.name};

            </div>
        );
    }
}
export default User;