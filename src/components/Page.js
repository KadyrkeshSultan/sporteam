import React from 'react'

export class Page extends React.Component{
    onBtnClick = e =>{
        const year = +e.currentTarget.innerText;
        this.props.setYear(year);
    }

    render(){
        const {year, photos} = this.props;
        return(
            <div className='ib page'>
                <div>
                    <button className='btn' onClick={this.onBtnClick}>2018</button>
                    <button className='btn' onClick={this.onBtnClick}>2017</button>
                    <button className='btn' onClick={this.onBtnClick}>2016</button>
                    <button className='btn' onClick={this.onBtnClick}>2015</button>
                    <button className='btn' onClick={this.onBtnClick}>2014</button>
                </div>
                <h3>{year} year</h3>
                <p>
                    You have {photos.length} photos
                </p>
            </div>
        )
    }
}