import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Map from './Map/map';
import { Learn } from './learn';
import { GetInvolved } from './get-involved';
import { Faq } from './faq';
import { Contact } from './contact';
import { Footer } from './footer';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#FAF0DC'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 'auto',
        color: theme.palette.text.secondary,
        opacity: 0.7,
        fontSize: '1.2em',
        fontWeight: 500
    }
}));

export function Landing() {
    const classes = useStyles();

    return (
        <div className={classes.root} id='landing-page'>
            <Grid container spacing={0} id='landing'>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <p>
                            Global average temperature has increased by more
                            than one degree celsius since pre-industrial times.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2} id='landing-grid-container'>
                    <Paper className={classes.paper} id='landing-grid-item'>
                        <p>
                            CO2 concentrations in the atmosphere are at their
                            highest levels in over 800,000 years.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <p>
                            Carbon dioxide, a key greenhouse gas that drives
                            global climate change, continues to rise every
                            month. Find out the dangerous role it and other
                            gases play.
                        </p>
                    </Paper>
                </Grid>
            </Grid>
            <Map />
            <Learn />
            <GetInvolved />
            <Faq />
            <Contact />
            <Footer />
        </div>
    );
}
