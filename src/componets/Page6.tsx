import * as React from "react";
import YouTube from 'react-youtube';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { white } from 'material-ui/styles/colors';
import Mary from  '../Images/Mary.jpg'
import Bill from  '../Images/Bill.jpg'
import Gene from  '../Images/Gene.jpg'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// https://github.com/troybetz/react-youtube
export class Example extends React.Component {
  
    render() {
        const opts = {
        //    height: '390',
        //    width: '640',
        maxWidth: '100%',
        maxHeight: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1 as 1
            }
        };

        return (
          <div >
          <Grid container spacing={2} 
          style={{ 
         //   backgroundColor: "green", 
                  marginTop: '10px',
                 }}
          >
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={8}
                                        
            >
            <div           style={{ backgroundColor: "green",
                                            height: 50 ,
                                         textAlign: "center", 
                                         fontWeight: "bold",
                                         color: "white",
                                         fontSize:30
                                  }}>
Event Material Managment Integrator
                                             </div>
            <Grid container spacing={2} 
                   style={{
                  //    backgroundColor: "blue", 
                     marginTop: '10px',
                
                    }}
            > 
            <Grid item xs={3}
                               style={{
                                //    backgroundColor: "blue", 
                              //     marginLeft: '0px',
                              
                                  }}
            
            >
            <Container  
                        style={{ 
                                   padding: "0px",
                             }}>
                       

                <h6      style={{  
                               textAlign: "justify",
  
                                }}>  Event Material Managment Integrator
                                EMMI automates process to help you:
                                Check, verify and reconcile returns
                                Send “return materials” reminders
                                Automated escalation process
                                Specialized reporting for program management
                                Controls Budget
                                The unique in-house developed system is designed to support material lending and provides means for users to borrow and return meeting materials such as tabletop displays, banners and tablecloths.  </h6> 

                 </Container>
            </Grid>

            <Grid item xs={9}>
            <Container fixed 
                        style={{ textAlign: "center",
                        
                          //          height: '350px',
                         //  backgroundColor: "white",
                                //  margin: "0px",
                                   padding: "0px",
                                    border: '1px solid grey'
                             }}>
                      <YouTube
                 videoId="2g811Eo7K8U"
                 opts={opts}
                 onReady={this._onReady}
                             />
                            
                            </Container>
       
            </Grid>



            </Grid>
            </Grid>
            <Grid item xs={2}>

            </Grid>


          </Grid>
        </div>

        );
    }

    _onReady(event: { target: any }) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}
