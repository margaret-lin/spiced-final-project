import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#E6D7FA',
        color: '#2E235F',
        height: '700px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        height: '400px',
        color: '#E6D7FA',
        backgroundColor: '#2E235F',
        paddingLeft: '30px'
    },
    form: {
        width: '450px',
        height: '400px',
        lineHeight: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    textField: {
        width: '400px'
    }
}));

export function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 id='get-in-touch-title'>Get In Touch.</h1>
            <Grid container spacing={6}>
                <Grid item xs={3}></Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <div>
                            <h2>Our Location</h2>
                            <p>SPICED Academy</p>
                            <p>Potsdamer Straße 188</p>
                            <p>10783 Berlin</p>
                            <br />
                            <br />
                        </div>
                        <div>
                            <h2>Our Phone Number</h2>
                            <p>030 98562427</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item sm={4}>
                    <form
                        className={classes.form}
                        noValidate
                        autoComplete='off'
                    >
                        <TextField
                            label='Name'
                            variant='outlined'
                            className={classes.textField}
                        />
                        <TextField
                            label='Phone Number'
                            variant='outlined'
                            className={classes.textField}
                        />
                        <TextField
                            label='Email'
                            variant='outlined'
                            className={classes.textField}
                        />
                        <TextField
                            label='Message'
                            row='4'
                            variant='outlined'
                            className={classes.textField}
                        />
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}
