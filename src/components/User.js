import React from 'react'

export class User extends React.Component{
    render(){
        const {name} = this.props;
        return (
            <div>
                <p>Hello, {name}!</p>
            </div>
        )
    }
}