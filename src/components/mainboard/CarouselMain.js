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
        
      <div><br/>
        <Slider {...settings}>
          
            <div>
            <Card style={{height:'300px'}}>
                <CardMedia component="img" image={"http://cdn.chatsports.com/thumbnails/5091-69818-original.jpeg"}/>
            </Card>
            </div>
            <div>
            <Card style={{height:'300px'}}>
                <CardMedia component="img" image={"https://st3.depositphotos.com/1029233/16183/i/950/depositphotos_161830512-stock-photo-friends-group-having-fun-together.jpg"}/>
            </Card>
            </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}