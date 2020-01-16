import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: '0.5em',
        height: '3.2em',
        backgroundColor: '#faf0dc'
    },
    logo: {
        height: '3em',
        width: '4em',
        marginLeft: '1em'
    },
    button: {
        fontSize: 1.2 + 'em',
        height: '2.5em',
        width: 170 + 'px'
    }
}));

export function Header() {
    const classes = useStyles();

    return (
        <div className='sticky'>
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
                        <Button className={classes.button} href='#map'>
                            Map
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            className={classes.button}
                            href='#learn-container'
                        >
                            Learn
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            className={classes.button}
                            href='#get-involved-container'
                        >
                            Get Involved
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            className={classes.button}
                            href='#faq-container'
                        >
                            FAQ
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            className={classes.button}
                            href='#contact-container'
                        >
                            Contact
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
