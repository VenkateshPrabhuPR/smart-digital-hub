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
    margin:'2%'
   
  },
  heading: {
    fontSize: theme.typography.pxToRem(21),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ReviewandComplete = () => {
  
  const classes = useStyles();
    return (
      <div className={classes.root}>
      <Accordion style={{
          background:"#f2f2f2",
          margin:"2%"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Network</Typography>
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
          <label for="fname" >VPC</label>
          <input type="text" id="fname" name="firstname" value="VPC1" style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "15%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
             
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
          <label for="fname" >Subnet</label>
          <input type="text" id="fname" name="firstname" value='Subnet1' style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "13%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
              
          }}/>
          </div>
          
          </form>
          <form style={{
            marginLeft:"26%"
             }}>
            <div style={{fontSize:"22px"}}>
          <label for="fname" >Internet Gateway</label>
          <input type="text" id="fname" name="firstname" value= 'igw1'style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "5%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
              
          }}/>
          </div>
        
          </form>
          <form style={{
            marginLeft:"26%"
             }}>
            <div style={{fontSize:"22px"}}>
          <label for="fname" >Security Groups</label>
          <input type="text" id="fname" name="firstname" value = "Sg-1" style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "6%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
              
          }}/>
          </div>
        
          </form>
          </div>
          </div>
        </AccordionDetails>
      </Accordion>

       <Accordion style={{
          background:"#f2f2f2",
          margin:"2%"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Datastore</Typography>
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
          <label for="fname" >Datastore</label>
          <input type="text" id="fname" name="firstname" value="Datastore1" style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "15%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
             
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
          <label for="fname" >Database</label>
          <input type="text" id="fname" name="firstname" value='Database1' style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "13%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
              
          }}/>
          </div>
          
          </form>
          <form style={{
            marginLeft:"26%"
             }}>
            <div style={{fontSize:"22px"}}>
          <label for="fname" >UserName</label>
          <input type="text" id="fname" name="firstname" value= 'User1'style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "5%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
              
          }}/>
          </div>
        
          </form>
          <form style={{
            marginLeft:"26%"
             }}>
            <div style={{fontSize:"22px"}}>
          <label for="fname" >Password</label>
          <input type="password" id="fname" name="firstname" value = "1234" style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "6%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
              
          }}/>
          </div>
        
          </form>
          </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{
          background:"#f2f2f2",
          margin:"2%"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Pipeline</Typography>
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
          <label for="fname" >Pipeline</label>
          <input type="text" id="fname" name="firstname" value= 'pipeline1'style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "93px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
              
          }}/>
          </div>
        
          </form>
          <form style={{
            marginLeft:"26%"
             }}>
            <div style={{fontSize:"22px"}}>
          <label for="fname" >Datastore</label>
          <input type="text" id="fname" name="firstname" value = "Datastore1" style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "6%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
              
          }}/>
          </div>
        
          </form>
          </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{
          background:"#f2f2f2",
          margin:"2%"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Network</Typography>
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
          <label for="fname" >VPC</label>
          <input type="text" id="fname" name="firstname" value="VPC1" style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "15%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
             
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
          <label for="fname" >Subnet</label>
          <input type="text" id="fname" name="firstname" value='Subnet1' style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "13%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
              
          }}/>
          </div>
          
          </form>
          <form style={{
            marginLeft:"26%"
             }}>
            <div style={{fontSize:"22px"}}>
          <label for="fname" >Internet Gateway</label>
          <input type="text" id="fname" name="firstname" value= 'igw1'style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "5%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
              
          }}/>
          </div>
        
          </form>
          <form style={{
            marginLeft:"26%"
             }}>
            <div style={{fontSize:"22px"}}>
          <label for="fname" >Security Groups</label>
          <input type="text" id="fname" name="firstname" value = "Sg-1" style={{
              width: "65%",
              padding: "12px 20px",
              marginTop: "2%",
              marginLeft: "6%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize:"17px",
              
          }}/>
          </div>
        
          </form>
          </div>
          </div>
        </AccordionDetails>
      </Accordion>

    
      </div>
      

      
      
    )
}

export default ReviewandComplete
