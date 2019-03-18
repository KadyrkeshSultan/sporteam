import React, { Component } from "react";
import Slider from "react-slick";
import { Card, CardMedia } from "@material-ui/core";

export default class CarouselMain extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const styles = {
      card: {
        position: 'relative',
      },
      overlay: {
        position: 'absolute',
        top: '100px',
        left: '20px',
        color: 'white',
        textShadow: "1px 1px 1px black",
        fontSize: 18,
        bottom: 0,
        minHeight: 80,
        width: '100%',
        zIndex: '2',

      }
    }
    return (

      <div ><br />
        <h2 style={{ fontWeight: '400' }}>ПОСЛЕДНИЕ НОВОСТИ</h2>
        <Slider {...settings} >
          <div >
            {/* <Card style={{ height: '300px', position: 'relative', boxShadow:'0px 0px 0px',backgroundColor:'' }}>
              <CardMedia component="img"
                alt="Contemplative Reptile"
                image={"http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg"} />
              <div style={styles.overlay}>
                <h2 >Firebase</h2>
              </div>
            </Card> */}
            <img src="http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg" style={{width:'100%',maxHeight:'400px'}}/>
            <div style={{
                bottom: 0,
                minHeight: 80,
                left: 0,
                position: 'absolute',
                width: '100%',
                zIndex: '2'
              }}></div>
          </div>
          <div >
            {/* <Card style={{ height: '300px' }}>
              <CardMedia component="img"
                alt="Contemplative Reptile"
                image={"http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg"} />
              <div style={{
                bottom: 0,
                minHeight: 80,
                left: 0,
                position: 'absolute',
                width: '100%',
                zIndex: '2'
              }}>
                <h2>Firebase</h2>
              </div>
            </Card> */}
            <img src="http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg" style={{width:'100%',maxHeight:'400px'}}/>
            <div style={{
                bottom: 0,
                minHeight: 80,
                left: 0,
                position: 'absolute',
                width: '100%',
                zIndex: '2'
              }}></div>
          </div>
        </Slider>
      </div >
    );
  }
}