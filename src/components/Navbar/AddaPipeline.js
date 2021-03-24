import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '94%',
      marginLeft:"3%",
     
    },
    heading: {
      fontSize: theme.typography.pxToRem(21),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  

const AddaPipeline = () => {

    const classes = useStyles();
    return (
        <div>
        <div style={{
            borderRadius:"5px",
            backgroundColor: "#f2f2f2",
            padding: "20px",
            margin:"3%"
        }}>
  <form style={{
      padding:"2%",
      marginLeft:"26%"
      
  }}>
      <div style={{fontSize:"22px"}}>
    <label for="fname" >Datastore Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Enter your datastore" style={{
        width: "65%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        fontSize:"17px",
        margin:"2%"
    }}/>
    </div>
    <div style={{marginLeft:"0%",fontSize:22}}>
              <label> List of Security Groups</label>
            <select style={{width :"65%",height:"20%",padding:"7px",display:"flex",margin:"2%",fontSize:22}}>
                <option>Select</option>
                <option>sg1</option>
                <option>sg2</option>
            </select>
            </div>
            <input type="submit" value="Add a pipeline" className = 'button' style={{
               marginLeft:"20%"
            }}></input>
    </form>
        </div>

<div className={classes.root}>
<Accordion style={{
    background:"#f2f2f2"
}}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    <Typography className={classes.heading}>Additional Configuration</Typography>
  </AccordionSummary>

  <AccordionDetails style ={{display: "block"}}>
  <div>
        <div style={{
            borderRadius:"5px",
            backgroundColor: "#f2f2f2",
            
        }}>
  <form style={{
       marginLeft:"26%"
      }}>
      <div style={{fontSize:"22px"}}>
    <label for="fname" >SQL Query</label>
    <input type="text" id="fname" name="firstname" placeholder="Enter your datastore" style={{
        width: "65%",
        padding: "12px 20px",
        margin: "8px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        fontSize:"17px",
        marginLeft:"99px"
    }}/>
    </div>
    </form>
    </div>
    <div style={{
            borderRadius:"5px",
            backgroundColor: "#f2f2f2",
            
        }}>
  <form style={{
      marginLeft:"26%"
       }}>
      <div style={{fontSize:"22px"}}>
    <label for="fname" >Conditional Clause</label>
    <input type="text" id="fname" name="firstname" placeholder="Enter your datastore" style={{
        width: "65%",
        padding: "12px 20px",
        margin: "2px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        fontSize:"17px",
        margin:"2%"
    }}/>
    </div>
    <input type="submit" value="Configure" className = 'button' style={{
               marginLeft:"20%"
            }}></input>
    </form>
    </div>
    </div>
  </AccordionDetails>
</Accordion>
</div>
</div>
        
)
}

export default AddaPipeline
