import React from 'react'

export class Page extends React.Component{
    render(){
        const {year, photos} = this.props;
        return(
            <div>
                <p>
                    You have {photos.length} photos by {year} year
                </p>
            </div>
        )
    }
}