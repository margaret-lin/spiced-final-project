import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

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
    },
    list: {
        listStyleType: 'none',
        textAlign: 'left',
        lineHeight: '2em'
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
                        <ul className={classes.list}>
                            <ListItem>
                                <ListItemIcon>
                                    <HelpOutlineIcon color='primary' />
                                </ListItemIcon>
                                Should we grow trees to remove carbon in the
                                atmosphere?
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <QuestionAnswerIcon color='secondary' />
                                </ListItemIcon>
                                Planting billions of trees across the world is
                                one of the biggest and cheapest ways of taking
                                CO2 out of the atmosphere to tackle the climate
                                crisis, according to scientists, who have made
                                the first calculation of how many more trees
                                could be planted without encroaching on crop
                                land or urban areas.
                            </ListItem>
                            <br />

                            <ListItem>
                                <ListItemIcon>
                                    <HelpOutlineIcon color='primary' />
                                </ListItemIcon>
                                Why are trees good for the environment?
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <QuestionAnswerIcon color='secondary' />
                                </ListItemIcon>
                                There are about three trillion trees on the
                                planet and they play a major role in producing
                                the oxygen we all breathe. But twice as many
                                existed before the start of human civilisation.
                            </ListItem>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
