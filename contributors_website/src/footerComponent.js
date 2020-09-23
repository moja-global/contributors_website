import React,{useState, useEffect, useRef} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Paper,Grid,Button, Container, Icon} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CustomButton from './CustomComponents/CustomButton';
import Image from 'material-ui-image';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        moja global
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#3b3b3b',
    color:'#fff',
  },

  textDiv:{
    padding: '8em 5em',
    color: 'white',

  },

  twitterContainer:{
    padding: '2em 5em',
  },

  icon:{
    padding:'0em 1em',
  },

  heading:{
    paddingTop: '3em',
    paddingBottom: '3em',
  }

}));

const footers = [
  {
    title: 'Company',
    description: ['Team',
     'History',
     'Contact us',
     'Documentation',],

     links:['https://github.com/moja-global/About_moja_global',
     'https://moja.global/about-moja-global-2-2-2-2/',
     'mailto:info@moja.global',
     'https://moja-global-documentation.readthedocs.io/en/latest/']
}
  ];

export default function FooterComponent() {
  const classes = useStyles();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <Container component="footer" className={classes.root}>
    <Grid container justify="flex-start">
      <Grid item md={6} xs={12}  className={classes.twitterContainer}>
          <div className="twitter-embed">
            <a
              className="twitter-timeline"
              data-height="300"
              data-theme="dark"
              data-chrome="noheader nofooter noborders"
              href="https://twitter.com/mojaglobal"
            >
              Tweets by HeyMarkKop
            </a>
          </div>
        </Grid>
    {footers.map((footer) => (
      <Grid item xs={6} md={3} key={footer.title}>
        <Typography variant="h6" color="white" className={classes.heading}>
          {footer.title}
        </Typography>
        <List>
          {footer.description.map((item,index) => (
            
            <ListItem key={item}>
                <Link href={footer.links[index]}  color="inherit">
                {item}
              </Link>
            </ListItem>
          ))}
        </List>
        </Grid>
          ))}
        <Grid item xs={6} md={3}>
        <Typography variant="h6" color="white" className={classes.heading}>
          Join Us here!
        </Typography>
        <Link href="https://twitter.com/mojaglobal?lang=en" color="inherit" className={classes.icon}>
          <TwitterIcon/>
        </Link>
        <Link href="https://github.com/moja-global/" color="inherit" className={classes.icon}>
          <GitHubIcon/>
        </Link>
        <Link href="https://www.linkedin.com/company/moja-global" color="inherit" className={classes.icon}>
          <LinkedInIcon/>
        </Link>
        <Link href="mailto:info@moja.global" color="inherit" className={classes.icon}>
          <MailIcon/>
        </Link>
      </Grid>

  </Grid>
  <Box mt={5}>
    <Copyright />
  </Box>
</Container>
  );
}
