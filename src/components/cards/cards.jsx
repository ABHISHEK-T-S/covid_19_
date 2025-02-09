import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './cards.module.css'
import CountUP from 'react-countup'
import CountUp from 'react-countup';
import cx from 'classnames'



function cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
    if (!confirmed) {
        return 'loading....';
    }
    //console.log(props);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className ={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {confirmed.value} duration = {2.5}separator="," />        
                         </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of active cases of covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className ={cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            recovered
                        </Typography>
                        <Typography variant="h5">
                        <CountUp start = {0} end = {recovered.value} duration = {2.5}separator="," />        
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of recoveries of covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className = {cx( styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            deaths
                        </Typography>
                        <Typography variant="h5">
                        <CountUp start = {0} end = {deaths.value} duration = {2.5}separator="," />            
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of death caused by covid 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default cards
