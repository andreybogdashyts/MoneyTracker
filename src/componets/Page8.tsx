import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from "./Radio";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import "../index.css"
import { red } from 'material-ui/colors';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginLeft: '24px' ,
      // marginRight: 'auto' ,
      '& .MuiTextField-root': {
        margin: '10px',
      //  padding: '15px' ,
      //  marginleft: '10px',
      //  marginright: '10px',
        width: '100%',
       
      },
    },
    paper: {      
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      margin: theme.spacing(1),
      background:'orange' , 
            
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 400,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export default function NestedGrid() {
  const classes = useStyles();
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
        <TextField id="outlined-search" label="Your First Name *" type="search" variant="outlined"  />  
        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-search" label="Adress 1" type="search" variant="outlined" />
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
        <TextField id="outlined-search" label="Your Last Name *" type="search" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-search" label="Adress 2" type="search" variant="outlined" />
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
        <TextField id="outlined-search" label="Title" type="search" variant="outlined"      />
        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-search" label="City" type="search" variant="outlined"  />
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow4() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
        <TextField id="outlined-search" label="Your email *" type="search" variant="outlined"      />
        
        </Grid>
        <Grid item xs={6}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">State</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Texas</option>
          <option value={20}>Arizona</option>
          <option value={30}>Uta</option>
        </Select>
      </FormControl>
        {/* <TextField id="outlined-search" label="State" type="search" variant="outlined"  /> */}
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow5() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
        <TextField id="outlined-search" label="Your website" type="search" variant="outlined"  />  
        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-search" label="Phone" type="search" variant="outlined" />
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow6() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
        <Radio/>
        </Grid>
        <Grid item xs={6}>
        <TextField id="outlined-search" label="Your message" type="search" variant="outlined" multiline={true} rows="6" margin-left= "1170px"  />
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow7() {
    return (
      
      <React.Fragment >

        <Grid item xs={6}>
        
        </Grid>
        <Grid item xs={6}>
        <div  style={{  height:50 }}>
       <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
         
        //  padding-top= "0px" 
        //  margin-right= '0px'
     
           style={{  
               // marginRight : '100px',
                   marginTop: '0px',
                  position: 'absolute',
                //  top: 10 ,
                 // left: 540,
               right: 50
         }} 
         
        >
        Send
       </Button>
      </div>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          <FormRow1 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow2 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow3 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow4 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow5 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow6 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow7 />
        </Grid>
      </Grid>

    </div>

  );
}