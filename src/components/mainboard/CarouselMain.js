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
    return (

      <div ><br />
        <h2>Последние новости</h2>
        <Slider {...settings} >
          <div style={{ position: 'relative' }}>
            <Card style={{ height: '300px' }}>
              <CardMedia component="img"
                alt="Contemplative Reptile"
                image={"http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg"} />
            </Card>
            <div style={{
              bottom: 0,
              minHeight: 80,
            left: 0,
            position: 'absolute',
            width: '100%',
            zIndex: '2'}}>
            <h2>Firebase</h2>
          </div>
        </div>
        <div>
          <Card style={{ height: '300px' }}>
            <CardMedia component="img"
              alt="Contemplative Reptile"
              image={"http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg"} />
          </Card>
        </div>
        </Slider>
      </div >
    );
  }
}