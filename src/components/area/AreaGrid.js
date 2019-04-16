import React from 'react';
import AreaCard from './AreaCard';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class AreaGrid extends React.Component {

    render() {
        const { areas } = this.props;
        return <React.Fragment>
            <Grid container spacing={24}>
            <Grid item xs={12} md={6}>
                    <h2 style={{ fontWeight: '300',marginBlockEnd: 0 }}>ПОПУЛЯРНЫЕ ПЛОЩАДКИ</h2>
                </Grid>
                <Grid item xs={12} md={6} style={{textAlign:'right'}}>
                    <Button  href='areas' color="primary" style={{
                        marginBlockStart: '1.3em',
                        textDecoration: 'none',
                        color:'black'
                        
                    }}>Все площадки &nbsp;<i class="fas fa-arrow-right" style={{fontSize:'inherit'}}> </i></Button >
                </Grid>
                {
                    areas && areas.map((item) => {
                        return <Grid key={item.id} item xs={12} sm={6} md={6} lg={3}>
                            <AreaCard area={item} />
                        </Grid>
                    })
                }
            </Grid>
        </React.Fragment>
    }
}
export default withStyles(styles)(AreaGrid);