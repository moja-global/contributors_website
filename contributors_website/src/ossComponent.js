import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Paper,Grid,Button} from '@material-ui/core';
import CustomButton from './CustomComponents/CustomButton';
import Oss from './images/oss.png';
import Image from 'material-ui-image';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#ececec',
  },

  textDiv:{
    padding: '15em 5em',
    color: '#1c2557',

  }
}));

export default function OssComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
        <div className={classes.textDiv}>
        <h1>Open Source Programs!</h1>
        <p> moja global routinely participates in Open Source Programs like the Google Summer Of Code, Google Season Of Docs and  Linux Mentorship programs etc.
        To know more about our selection process, click <a href="https://moja-global-documentation.readthedocs.io/en/latest/contact.html#outreach-and-student-programs">here</a></p>
        <CustomButton variant="contained" color="primary" disableElevation>
        Get Started
        </CustomButton>
        </div>
        </Grid>
        <Grid item xs={12} md={6} >
          <Image className={classes.root}
            src={Oss}
            disableSpinner
          />
        </Grid>
      </Grid>
    </div>
  );
}
