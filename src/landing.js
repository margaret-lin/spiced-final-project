import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Map from './Map';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#FAF0DC',
        height: 100 + 'vh'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 'auto',
        color: theme.palette.text.secondary,
        opacity: 0.7
    }
}));

export function Landing() {
    const classes = useStyles();

    return (
        <div className={classes.root} id='landing-page'>
            <Grid container spacing={3} id='landing'>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <p>
                            A paragraph is a series of related sentences
                            developing a central idea, called the topic. Try to
                            think about paragraphs in terms of thematic unity
                        </p>
                    </Paper>
                </Grid>
                <Grid item xs={7}></Grid>
                <Grid item xs={7}></Grid>
                <Grid item xs={4}>
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
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <p>
                            A paragraph is a series of related sentences
                            developing a central idea, called the topic.
                        </p>
                    </Paper>
                </Grid>
            </Grid>
            <div>
                <Map />
            </div>
        </div>
    );
}
