import React from 'react';
import {Parallax,Background} from 'react-parallax';
import { withTheme } from '@material-ui/core';


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    color: 'white'

  };
  const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width:"100%",
    

  };
  const image1 ="./img/sport.jpg";
  
class Banner extends React.Component{
    render(){
        return <React.Fragment>
            <div style={styles}>
              <Parallax bgImage={image1} strength={500}>
                <div style={{ height: 700 }}>
                  <div style={insideStyles}><div className="section no-pad-bot" style={{marginTop: '20%'}}>
                    <div className="container">
                        <h1 className="header center white-text text-lighten-2">УВЛЕКАЕМ СПОРТОМ</h1>
                        <div className="row">
                            <div className="col s6 l3">
                                <p>200 ВИДОВ СПОРТА</p>
                            </div>
                            <div className="col s6 l3">
                                <p>100 УЧАСТНИКОВ</p>
                            </div>
                            <div className="col s6 l3">
                                <p>6500 ПЛОШАДОК</p>
                            </div>
                            <div className="col s6 l3">
                                <p>450 МЕРОПРИЯТИЙ</p>
                            </div>
                        </div>
                    </div>
                </div></div>
                </div>
              </Parallax>          
            </div>
        </React.Fragment>
    }
}

export default Banner;