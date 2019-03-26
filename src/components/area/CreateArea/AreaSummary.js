import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  chip:{
      margin: theme.spacing.unit,
  }
});

class AreaSummary extends React.Component {
    onAreaDescChange = e =>{
        const areaDesc = e.currentTarget.value;
        this.props.areaDescChange(areaDesc);
    }
    onAreaPriceChange = e =>{
        const areaPrice = e.currentTarget.value;
        this.props.areaPriceChange(areaPrice);
    }
    onAreaContactsChange = e =>{
        const areaContacts = e.currentTarget.value;
        this.props.areaContactsChange(areaContacts);
    }
    onAreaWorktimeChange = e =>{
        const areaWorktime = e.currentTarget.value;
        this.props.areaWorktimeChange(areaWorktime);
    }
  
  render(){
    const { classes, area, sportTypes, areaTypes } = this.props;
    const sports = sportTypes.filter((sportType) => area.areaSportTypes.find((item) => item.id == sportType.id) != undefined);
    const areaType = areaTypes.find((item) => item.id == area.areaTypeId);

    return (
        <div>
            <Typography variant="h5" align='center' gutterBottom>
                    Основная информация
            </Typography>
        
            <Typography  variant="subtitle1" component="h3">
            Виды спорта:
            </Typography>

            <Typography variant="subtitle1" style={{fontWeight: '700',}}>
            {
                sports && sports.map((item) =>{
                    return <Chip key={item.id} avatar={<Avatar src={item.iconUrl} />} label={item.name} className={classes.chip} />
                })
            }
            </Typography>

            <Typography variant="subtitle1" component="h3">
            Название:
            </Typography>

            <Typography variant="subtitle1" style={{fontWeight: '700',}}>
                {area.name}
            </Typography>

            <Typography variant="subtitle1" component="h3">
            Адрес площадки:
            </Typography>

            <Typography variant="subtitle1" style={{fontWeight: '700',}}>
            {area.location.address}
            </Typography>

            <Typography variant="subtitle1" component="h3">
                Характеристики:
            </Typography>

            <Typography variant="subtitle1" style={{fontWeight: '700',}}>
                Тип площадки: {areaType && areaType.name}
            </Typography>
            <Typography variant="h6" align='center' gutterBottom>
                Дополнительная информация
            </Typography>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Icon className={'fa fa-clock'} />
                </Grid>
                <Grid item xs>
                    <TextField id="input-with-icon-grid" label="Режим работы (пн-пт 08:00-21:00)" onChange={this.onAreaWorktimeChange} value={area.worktime} fullWidth />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Icon className={'fa fa-phone'} />
                </Grid>
                <Grid item xs>
                    <TextField id="input-with-icon-grid" label="Контакты" onChange={this.onAreaContactsChange} value={area.contacts} fullWidth />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Icon className={'fas fa-tenge'} />
                </Grid>
                <Grid item xs>
                    <TextField id="input-with-icon-grid" label="Стоимость" onChange={this.onAreaPriceChange} value={area.price} fullWidth />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Icon className={'fas fa-info'} />
                </Grid>
                <Grid item xs>
                    <TextField id="input-with-icon-grid" label="Доп.информация" onChange={this.onAreaDescChange} value={area.description} fullWidth />
                </Grid>
            </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(AreaSummary);