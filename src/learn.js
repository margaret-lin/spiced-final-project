import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#ffdcd7',
        height: '100%',
        color: '#E6D7FA',
        padding: 50 + 'px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 400 + 'px',
        color: theme.palette.text.secondary,
        opacity: 0.7
    }
}));

export function Learn() {
    const classes = useStyles();

    return (
        <div className={classes.root} id='learn-container'>
            <h1 id='learn-title'>Learn.</h1>
            <Grid container spacing={6}>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <h3>Carbon emissions</h3>
                        <p>
                            Emissions of carbon dioxide (CO2) are either natural
                            or anthropic (due to human activity). Natural
                            emissions are ones from natural wildfire, animal
                            breathing, plants, aquatic microorganism, the ground
                            or even volcanic origin. Anthropic emissions comes
                            from heat
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <h3>The Greenhouse Effect</h3>
                        <p>
                            The greenhouse effect occurs as light is absorbed by
                            surface and oceans of the earth, transformed into
                            heat, and re-radiated as infrared radiation. Certain
                            portions of the Earth's atmosphere, the greenhouse
                            gases, absorb the heat, and once again re-radiate it
                            in all directions. The rapid increase in greenhouse
                            gases during the 20th century has created an
                            enhanced greenhouse effect, contributing to global
                            warming.
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <h3>Global Warming</h3>
                        <p>
                            Data from human records, tree rings, corals, and
                            other sources show that average global temperatures
                            rose by .41 degrees Celsius (.74 degrees Fahrenheit)
                            during the 20th century, with the increase
                            accelerating in the second half of the century. Some
                            scientists suggest that climate change may result in
                            cooling in some areas, as ocean and air currents
                            change, and increased ocean evaporation results in
                            cases of heavy localized snowfall.
                        </p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
