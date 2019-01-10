import React from 'react'

export class User extends React.Component{
    render(){
        const {name} = this.props;
        return (
            <div className='ib user'>
                <p>Hello, {name}!</p>
            </div>
        )
    }
}