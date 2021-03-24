import React,{useState} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid';
import vpc from '../assets/vpc.png'

import subnet from '../assets/subnet.png'
import vpcigw from '../assets/vpcigw.png'
import vpcsg from '../assets/vpcsg.png'

import FormHelperText from '@material-ui/core/FormHelperText';
import styled from "styled-components";


const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 345,
    },
    
    
  }));
  

 
const NetworkSettings = () => {
    
    const [checked, setChecked] = useState(false)
    const [radio, setRadio] = useState(true)
   
    const handleChange = (e)=>{
       setChecked(
         e.target.checked
       );
       setRadio(false);
       console.log(e.target.checked);
    }
   
    const handleRadioChange = (e)=>{
     setRadio(
       e.target.checked
     )
     setChecked(false);
     console.log(e.target.checked);
   }


  const classes = useStyles();
        return (

        
        <div>
            <div style={{marginLeft:'2%'}}>
          <FormControlLabel  value="end" control={<Radio color="primary"  checked={radio} onChange={(e) => handleRadioChange(e)}  />}  label="Create New Network Settings" />
          <FormControlLabel  value="end" control={<Radio color="primary"  onChange ={(e) => handleChange(e)} checked = {checked}/>} label="Existing Network Setup" /> 
          </div>
          {radio&&
        
            <div style={{marginTop:'8%', marginLeft:'2%'}}>
                 <Grid container spacing={2} >
                 <Grid item xs = {12} sm={6} md ={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="vpc"
                            height = ''
                            image = {vpc}
                            
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                VPC
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Amazon Virtual Private Cloud (Amazon VPC) enables you to launch AWS resources 
                            into a virtual network that you've defined. 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
    </Grid>
      <Grid item xs = {12} sm={6} md ={3}>
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          component="img"
          alt="subnet"
          height = ''
          image = {subnet}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Subnet
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
        Subnet is a logical subdivision of an IP network,A range of IP addresses in your VPC.It has two type public and private subnet.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
    <Grid item xs = {12} sm={6} md ={3}>
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          component="img"
          alt="vpc"
          height = ''
          image = {vpcigw}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Internet Gateway
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Internet gateway is horizontally scaled and highly available VPC component it 
          allows communication between your VPC and internet.


          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
    <Grid item xs = {12} sm={6} md ={3}>
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          component="img"
          alt="vpc"
          height = ''
          image = {vpcsg}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Security Groups
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Security group acts as a virtual firewall for EC2 instances to control incoming and outgoing traffic.
           
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
    </Grid>
    <div style={{
          margin: '33px 0px',
          padding: 10,
          borderRadius: "3 3 3 3",
          color: "#9F6000",
  backgroundColor: "#FEEFB3"
    }}>
  <i class="fa fa-warning"></i>
  This is a warning message.
</div>
    </div> 
          }
         
          {!radio&& <div style={{padding:"7%"}}>
              <form style ={{fontSize:"22px",background:"#f2f2f2",padding:"2%",marginTop:"-5%",}}>
                  <div style={{marginLeft:"27%"}}>
              <label> List of VPC</label>
            <select style={{width :"65%",height:"20%",padding:"15px",display:"flex",margin:"2%",fontSize:22}}>
                <option>Select</option>
                <option>VPC1</option>
                  <option>VPC2</option>

              

            </select>
            </div>
            <div style={{marginLeft:"27%"}}>
              <label> List of Subnet</label>
            <select style={{width :"65%",height:"20%",padding:"15px",display:"flex",margin:"2%",fontSize:22}}>
                <option>Select</option>
                <option>Subnet1</option>
               <option>Subnet2</option>
             </select>
            </div>
            <div style={{marginLeft:"27%"}}>
              <label> List of Internet Gateway</label>
            <select style={{width :"65%",height:"20%",padding:"15px",display:"flex",margin:"2%",fontSize:22}}>
                <option>Select</option>
                <option>igw1</option>
                <option>igw2</option>
            </select>
            </div>
            <div style={{marginLeft:"27%",fontSize:22}}>
              <label> List of Security Groups</label>
            <select style={{width :"65%",height:"20%",padding:"15px",display:"flex",margin:"2%",fontSize:22}}>
                <option>Select</option>
                <option>sg1</option>
                <option>sg2</option>
            </select>
            </div>
            </form>
            <div style={{
          margin: '33px 0px',
          padding: 10,
          borderRadius: "3 3 3 3",
          color: "#9F6000",
      backgroundColor: "#FEEFB3"
        }}>
      <i class="fa fa-warning"></i>
      This is a warning message.
    </div>
         </div>
}        
        </div>
    )
}

export default NetworkSettings
