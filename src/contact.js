import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        width: '350px',
        height: '400px',
        lineHeight: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    textField: {
        width: '380px'
    },
    button: {
        width: '40px',
        color: '#E6D7FA',
        backgroundColor: '#2E235F',
        width: '380px',
        height: '50px'
    }
}));

export function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.root} id='contact-container'>
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
                        sm={4}
                    >
                        extField} />
                        <TextField
                            label='Phone #'
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
                            multiline
                            row='4'
                            variant='outlined'
                            className={classes.textField}
                        />
                        <Button
                            className={classes.button}
                            variant='contained'
                            color='primary'
                        >
                            Send
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}
