import React from 'react';
import { Parallax } from 'react-parallax';
import Grid from '@material-ui/core/Grid';

const styles = {
  textAlign: "center",
  color: 'white'

};
const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "100%",


};
const image1 = "./img/sport.jpg";

class Banner extends React.Component {
  render() {
    return <React.Fragment>
        <Parallax bgImage={image1} strength={100} style={styles}>
          <div style={{ height: 600 }}>
            <div style={insideStyles}>
            <h1 >УВЛЕКАЕМ СПОРТОМ</h1>
            <Grid container spacing={16} alignItems="center"  style={{ marginTop: '20%' }}>
                <Grid item xs={6} sm={6} md={6} lg={3}>
                  200 ВИДОВ СПОРТА
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={3}>
                  100 УЧАСТНИКОВ
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={3}>
                  6500 ПЛОШАДОК
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={3}>
                  450 МЕРОПРИЯТИЙ
                </Grid>
              </Grid>
            </div>
          </div>
        </Parallax>
    </React.Fragment>
  }
}

export default Banner;