import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { white } from 'material-ui/styles/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    div: {
      // padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
     // border: '1px solid white',
      height:'300px',
     // innerHeight: '100px'
    //  bord er: 1px solid 'white'
    },
  }),
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={7}    
      // style={{ backgroundColor: "black" }}  
        >
        <Grid item xs>
          <div className={classes.div}></div>
        </Grid>
       
        <Grid item xs={3}>
        <div className={classes.div}>
         <h4 style={{ textAlign: "left",
                       fontWeight: "bold"
                        }}> About us</h4>
         <h6   style={{ textAlign: "left",
                       lineHeight:  1.2,
                        }}>   
         Facing challenges head on and developing creative solutions is <i>our forte</i>. The difference is in our uniquely dedicated and professional approach to getting things done.</h6>
        </div>
        </Grid>
       
        <Grid item xs={3}>
        <div className={classes.div}>
         <h4 style={{ textAlign: "left",
                       fontWeight: "bold"
                        }}> Pennsylvania:</h4>
         <h6   style={{ textAlign: "left",
                       lineHeight:  1.2,
                        }}>   
        2750 Morris Road Suite C Lansdale, PA 19446 Telephone: 215-822-5775 Fax: 215-822-7977</h6>
        </div>
        </Grid>
        <Grid item xs={3}>
        <div className={classes.div}>
         <h4 style={{ textAlign: "left",
                       fontWeight: "bold"
                        }}> Delaware:</h4>
         <h6   style={{ textAlign: "left",
                       lineHeight:  1.2,
                        }}>   
         1500 Johnson Way New Castle, DE 19720 Telephone: 302-322-5200 Fax: 302-323-9970</h6>
        </div>
        </Grid>



        <Grid item xs>
        <div className={classes.div}></div>
        </Grid>
      </Grid>
      
    </div>
  );
}