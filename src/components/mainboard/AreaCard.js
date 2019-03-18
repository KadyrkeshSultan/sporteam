import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class AreaCard extends React.Component {
    render() {
        const { name, sportTypes, location, image } = this.props;

        return <Card>
            <CardActionArea >
                <div style={{
                    height: '140px',
                    overflow: 'hidden',
                }}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        image={image}
                        height="inherit"
                    />
                </div>
                <CardContent>
                    <Typography variant="inherit" noWrap>
                        <b>{name}</b>
                    </Typography>
                    <Typography component="p" variant="inherit" noWrap>
                        {sportTypes}
                    </Typography>
                    <Typography variant="inherit" noWrap>
                        <i class="fas fa-location-arrow"></i>{location}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    }
}

export default AreaCard;