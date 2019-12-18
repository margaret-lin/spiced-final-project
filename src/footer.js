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
    }
}));

export function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    This is footer 1
                </Grid>
                <Grid item xs={4}>
                    This is footer 2
                </Grid>
                <Grid item xs={4}>
                    This is footer 3
                </Grid>
            </Grid>
        </div>
    );
}
