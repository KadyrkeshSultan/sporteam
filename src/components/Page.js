import React from 'react'

export class Page extends React.Component{
    onBtnClick = e =>{
        const year = +e.currentTarget.innerText;
        this.props.getPhotos(year);
    }

    render(){
        const {year, photos, isFetching, isDisable} = this.props;
        var arr = [2018, 2017, 2016, 2015, 2014];
        return(
            <div className='ib page'>
                <div>
                    {
                        arr.map(item =>{
                            return <React.Fragment key={item}>
                                        <button disabled={isDisable} className='btn' onClick={this.onBtnClick}>{item}</button> {' '}
                                </React.Fragment> 
                        })
                    }              
                </div>
                <h3>{year} year</h3>
                {!isFetching ? <p>You have {photos.length} photos</p> : <p>Loading...</p>}
            </div>
        )
    }
}