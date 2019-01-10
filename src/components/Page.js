import React from 'react'

export class Page extends React.Component{
    onBtnClick = e =>{
        const year = +e.currentTarget.innerText;
        this.props.setYear(year);
    }

    render(){
        const {year, photos} = this.props;
        return(
            <div>
                <div>
                    <button onClick={this.onBtnClick}>2018</button>
                    <button onClick={this.onBtnClick}>2017</button>
                    <button onClick={this.onBtnClick}>2016</button>
                    <button onClick={this.onBtnClick}>2015</button>
                    <button onClick={this.onBtnClick}>2014</button>
                </div>
                <p>
                    You have {photos.length} photos by {year} year
                </p>
            </div>
        )
    }
}