import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { white } from 'material-ui/styles/colors';
import Mary from  '../Images/Mary.jpg'
import Bill from  '../Images/Bill.jpg'
import Gene from  '../Images/Gene.jpg'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
      //textAlign: 'center',
      color: 'black',
     // border: '1px solid blue',
     // height:'500',
      
    },
  }),
);

export default function AutoGrid7() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={7}    
      // style={{ backgroundColor: "black" }}  
        >
        <Grid item xs>
          <div className={classes.div}></div>
        </Grid>
       
        <Grid item xs >
         <Container fixed 
                   style={{ textAlign: "center",
                           fontWeight: "bold",
                               height: '350px',
                      backgroundColor: "white",
                           //  margin: "0px",
                              padding: "0px",
                               border: '1px solid grey'
                        }}>
                   
           <img src={Mary}
              style={{  border: '2px solid blue'
                            }}/>
           <h5      style={{  
                          marginTop:"-10px",
                         fontWeight: "bold",
                           }}>  Mary Fox Donnelly  </h5> 
           <h6      style={{ 
                          marginTop:"-5px",
                              color: "blue"
                      //   fontWeight: "bold",
                           }}>  President & CEO  </h6> 
            </Container>
        </Grid>
       
        <Grid item xs={5}>
        <div className={classes.div}
                //  style={{ width: 450 ,
                //       }}
                      >
             
                 
         {/* <h4 style={{ textAlign: "left",
                       fontWeight: "bold"
                        }}> Pennsylvania:</h4> */}
         <h6   style={{ textAlign: "left",
                       lineHeight:  1.5,
                        }}>   
        <b>Mary Fox Donnelly </b>took a small screen print shop and turned it into a growing experience. With over 25 years of industry experience, Mary grew the business out of a small screen printing company into the "Total Marketing Production Services" company you see today. Mary was named a WBENC Star, the nation's premier award for excellence among women's business enterprises. Mary is passionate about WBENC as demonstrated by her involvement in major WBENC events and service on a variety of committees. Regionally she serves on the Envoy Committee, the Women’s Business Enterprise Council and is a Regional Sponsor. Nationally she is a Forum Committee Representative (FCR) and serves on the Program Committee. She was also appointed Envoy Chairperson for WBEC PA-DE-sNJ for 2015
Mary enjoys spending time with family and friends in Long Beach Island, NJ and does most of her creative thinking on the dock of the bay. Mary is an active member in her church Parish and serves as a Coordinator of the Angel Food Ministry.</h6>
        </div>
        </Grid>
      
        <Grid item xs>
        <div className={classes.div}></div>
        </Grid>

        <Grid item xs>
        <div className={classes.div}></div>
        </Grid>
      </Grid>



      <Grid container spacing={7}    
      // style={{ backgroundColor: "black" }}  
        >
        <Grid item xs>
          <div className={classes.div}></div>
        </Grid>
       
        <Grid item xs={5}>
        <div className={classes.div}>
           <img src={Bill} 
              style={{  border: '2px solid blue',
                        height:100,
                         width:100,
                         float:'left',
                        margin:'1px 20px 0px 1px',
                            }}/>
         <h6 style={{ textAlign: "left",
                       fontWeight: "bold"
                        }}> 
                        Bill Scannapieco</h6>
         <h6   style={{ textAlign: "left",
                       lineHeight:  1.5,
                        }}>   
        Bill Scannapieco is an accomplished Operations Executive with over 28 years of experience in the Direct Marketing Industry. A highly motivated, results-oriented leader with experience across many different vertical markets focused on delivering significant results in organizational structure, customer satisfaction, strategic planning and leadership development. Bill is very passionate about the work he does and the team he does it with.
In his personal time, Bill enjoys golfing and spending quality time with his family and friends.</h6>
        </div>
        </Grid>
        <Grid item xs={5}>
        <div className={classes.div}>
           <img src={Gene} 
              style={{  border: '2px solid blue',
                        height:100,
                         width:100,
                         float:'left',
                        margin:'1px 20px 0px 1px',
                            }}/>
         <h6 style={{ textAlign: "left",
                       fontWeight: "bold"
                        }}> 
                        
Gene Pfeiffer</h6>
         <h6   style={{ textAlign: "left",
                       lineHeight:  1.5,
                        }}>   
        Bill Scannapieco is an accomplished Operations Executive with over 28 years of experience in the Direct Marketing Industry. A highly motivated, results-oriented leader with experience across many different vertical markets focused on delivering significant results in organizational structure, customer satisfaction, strategic planning and leadership development. Bill is very passionate about the work he does and the team he does it with.
In his personal time, Bill enjoys golfing and spending quality time with his family and friends.</h6>
        </div>
        </Grid>
      


        <Grid item xs>
        <div className={classes.div}></div>
        </Grid>
      </Grid>

      
    </div>
    
  );
}