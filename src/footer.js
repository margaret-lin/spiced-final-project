import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 50 + 'px',
        height: 250 + 'px',
        backgroundColor: '#194241',
        color: '#FFF'
    },
    list: {
        listStyleType: 'none',
        textAlign: 'center',
        lineHeight: '1em',
        color: '#FFF'
    },
    signUp: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontSize: '20px'
    },
    textField: {
        width: '600px'
    },
    button: {
        width: '120px',
        height: '50px'
    },
    gridSmallBoxes: {
        padding: '70px'
    },
    icons: {
        color: 'white'
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
}));

export function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.signUp}>
                    <span>Stay in the Loop</span>
                    <input placeholder='First name' className='footer-input' />
                    <input placeholder='Last name' className='footer-input' />

                    <input placeholder='Email' className='footer-input' />
                    <Button className={classes.button} variant='contained'>
                        Sign Up
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <p>&copy; Margaret Lin 2019</p>
                    <ListItemIcon>
                        <a
                            className={classes.link}
                            href='https://www.linkedin.com/in/margaretwanyulin/'
                        >
                            <LinkedInIcon
                                className={classes.icons}
                                fontSize='large'
                            />
                        </a>
                    </ListItemIcon>
                    <ListItemIcon>
                        <FacebookIcon
                            className={classes.icons}
                            fontSize='large'
                        />
                    </ListItemIcon>
                    <ListItemIcon>
                        <TwitterIcon
                            className={classes.icons}
                            fontSize='large'
                        />
                    </ListItemIcon>
                </Grid>
                <Grid item xs={6}>
                    Site Content References:
                    <ul className={classes.list} id='footer-ref'>
                        <li>
                            <a href='https://sciencing.com/moon-its-effect-weather-6315413.html'>
                                Sciencing.com
                            </a>
                        </li>
                        <li>
                            <a href='https://cdiac.ess-dive.lbl.gov/faq.html#Q1'>
                                CDIAC
                            </a>
                        </li>
                        <li>
                            <a href='https://www.theguardian.com/environment/2019/jul/04/planting-billions-trees-best-tackle-climate-crisis-scientists-canopy-emissions'>
                                The Guardian
                            </a>
                        </li>
                        <li>
                            <a href='https://ourworldindata.org/grapher/annual-co-emissions-by-region'>
                                Our World in Data
                            </a>
                        </li>
                        <li>
                            <a href='http://naturalearthdata.com/'>
                                Natural Earth
                            </a>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
}
