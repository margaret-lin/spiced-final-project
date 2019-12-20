import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 50 + 'px',
        height: 400 + 'px',
        backgroundColor: '#194241',
        color: '#FFF'
    },
    list: {
        listStyleType: 'none',
        textAlign: 'center',
        lineHeight: '1em',
        color: '#FFF'
    }
}));

export function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <p>&copy; Margaret Lin 2019</p>
                </Grid>
                <Grid item xs={4}>
                    This is footer 2
                </Grid>
                <Grid item xs={4}>
                    Site Content References:
                    <ul className={classes.list}>
                        <li>
                            <a href='https://sciencing.com/moon-its-effect-weather-6315413.html'>
                                Sciencing.com
                            </a>
                        </li>
                        <li>
                            <a href='https://cdiac.ess-dive.lbl.gov/faq.html#Q1'>
                                CDIAC
                            </a>
                        </li>
                        <li>
                            <a href='https://www.theguardian.com/environment/2019/jul/04/planting-billions-trees-best-tackle-climate-crisis-scientists-canopy-emissions'>
                                The Guardian
                            </a>
                        </li>
                        <li>
                            <a href='https://ourworldindata.org/grapher/annual-co-emissions-by-region'>
                                Our World in Data
                            </a>
                        </li>
                        <li>
                            <a href='http://naturalearthdata.com/'>
                                Natural Earth
                            </a>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
}
