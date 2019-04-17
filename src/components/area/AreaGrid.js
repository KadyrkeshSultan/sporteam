import React from 'react';
import AreaCard from './AreaCard';
import { Grid, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
class AreaGrid extends React.Component {

    render() {
        const { areas } = this.props;
        return <React.Fragment>
            <h2 style={{ fontWeight: '400' }}>ПОПУЛЯРНЫЕ ПЛОЩАДКИ <Link component={'a'} href='/events'>Все &rarr;</Link> </h2>
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
export default (AreaGrid);