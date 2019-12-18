import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '400px',
        color: theme.palette.text.secondary,
        opacity: 0.7
    }
}));

export function Faq() {
    const classes = useStyles();

    return (
        <div className={classes.root} id='faq-container'>
            <h1 id='faq-title'>Frequently Asked Questions.</h1>
            <Grid container spacing={3}>
                <Grid item xs={3}></Grid>
                <Grid item md={7}>
                    <Paper className={classes.paper}>
                        <p>
                            A paragraph is a series of related sentences
                            developing a central idea, called the topic. Try to
                            think about paragraphs in terms of thematic unity
                        </p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
