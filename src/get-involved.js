import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#ffdcd7',
        height: 100 + 'vh'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        height: '400px',
        color: theme.palette.text.secondary,
        opacity: 0.7,
        marginRight: '-120px',
        marginTop: '30px',
        fontSize: '16px'
    },
    image: {
        width: '90%',
        height: '500px',
        objectFit: 'cover'
    }
}));

export function GetInvolved() {
    const classes = useStyles();

    return (
        <div className={classes.root} id='get-involved-container'>
            <h1 id='get-involved-title'>Get Involved.</h1>
            <Grid container spacing={6}>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <p>
                            Planting trees, conserving existing forests and
                            grasslands, and capturing CO2 from power plants and
                            factories.
                        </p>
                        <p>
                            Improvements to energy efficiency and vehicle fuel
                            economy,{' '}
                            <a href='https://www.nationalgeographic.com/environment/global-warming/wind-power'>
                                increases in wind
                            </a>{' '}
                            and solar power, biofuels from organic waste,
                            setting a price on carbon, and{' '}
                            <a href='https://www.nationalgeographic.com/environment/global-warming/deforestation/'>
                                protecting forests
                            </a>{' '}
                            are all potent ways to reduce the amount of carbon
                            dioxide and other gases trapping heat on the planet.
                        </p>
                    </Paper>
                </Grid>
                <Grid item sm={5}>
                    <img
                        className={classes.image}
                        src='/images/notebook-2.jpg'
                        alt='get started'
                    />
                </Grid>
            </Grid>
        </div>
    );
}
