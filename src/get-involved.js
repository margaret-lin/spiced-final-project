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
        textAlign: 'center',
        height: '400px',
        color: theme.palette.text.secondary,
        opacity: 0.7,
        marginRight: '-120px',
        marginTop: '30px'
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
                            A paragraph is a series of related sentences
                            developing a central idea, called the topic. Try to
                            think about paragraphs in terms of thematic unity: a
                            paragraph is a sentence or a group of sentences that
                            supports one central, unified idea. Paragraphs add
                            one idea at a time to your broader argument.
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
