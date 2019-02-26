import React from 'react';

class Banner extends React.Component{
    render(){
        return <React.Fragment>
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot" style={{marginTop: '20%'}}>
                    <div className="container">
                        <h1 className="header center white-text text-lighten-2" >УВЛЕКАЕМ СПОРТОМ</h1>
                        <div className="row center">
                            <div className="col s3">
                                <p>200 ВИДОВ СПОРТА</p>
                            </div>
                            <div className="col s3">
                                <p>100 УЧАСТНИКОВ</p>
                            </div>
                            <div className="col s3">
                                <p>6500 ПЛОШАДОК</p>
                            </div>
                            <div className="col s3">
                                <p>450 МЕРОПРИЯТИЙ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parallax"></div>
            </div>
            {/* <img src='./img/sport.jpg' alt={"Unsplashed background img 1"} /> */}
        </React.Fragment>
    }
}

export default Banner;