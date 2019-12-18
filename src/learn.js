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
            </Grid>
        </div>
    );
}
