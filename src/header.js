import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 10 + 'px',
        height: 90 + 'px',
        backgroundColor: '#faf0dc'
    },
    logo: {
        height: 75 + 'px',
        width: 125 + 'px',
        marginLeft: 25 + 'px'
    },
    button: {
        fontSize: 1.2 + 'em',
        height: 70 + 'px',
        width: 170 + 'px'
    }
}));

export function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid container item xs={2}>
                    <Link to='/'>
                        <img
                            src='logo.png'
                            alt='logo'
                            className={classes.logo}
                        />
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <a href='#map'>
                        <Button className={classes.button}>Map</Button>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <a href='#learn-container'>
                        <Button className={classes.button}>Learn</Button>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <a href='#get-involved-container'>
                        <Button className={classes.button}>Get Involved</Button>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <a href='#faq-container'>
                        <Button className={classes.button}>FAQ</Button>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <a href='#contact-container'>
                        <Button className={classes.button}>Contact</Button>
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}
