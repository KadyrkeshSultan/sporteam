import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default class CarouselMain extends Component {
  render() {
    return (

      <div ><br />
        <h2 style={{ fontWeight: '400' }}>ПОСЛЕДНИЕ НОВОСТИ</h2>
        <Carousel showArrows={false} autoPlay={true} showThumbs={false} dynamicHeight={false} useKeyboardArrows={true} swipeable={true} emulateTouch={true} showStatus={false}>
          <div >
            <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 1</p>
          </div>
          <div>
          <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 2</p>
          </div>
          <div>
          <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 3</p>
          </div>
          <div>
          <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 4</p>
          </div>
          <div>
          <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 5</p>
          </div>
          <div>
          <img src="https://itd2.mycdn.me/image?id=850604732307&t=20&plc=WEB&tkn=*wBRLLaXtkm34eqMg1mSbUIPEvO0" style={{height:'300px',objectFit:'cover'}}/>
            <p className="legend" style={{backgroundColor:'#0000'}}>Legend 6</p>
          </div>
        </Carousel>
      </div >
    );
  }
}