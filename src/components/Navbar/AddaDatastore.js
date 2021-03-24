import React from 'react'
import './AddDatastore.css'

const AddaDatastore = () => {

   
    return (
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
    <div style={{fontSize:"22px"}}>
    <label for="fname" >Database Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Enter your database" style={{
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
    <div style={{fontSize:"22px"}}>
    <label for="fname" >Username</label>
    <input type="text" id="fname" name="firstname" placeholder="Enter your username" style={{
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
    <div style={{fontSize:"22px"}}>
    <label for="fname" >Password</label>
    <input type="password" id="fname" name="firstname" placeholder="Enter your password" style={{
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
    <div style={{
        marginLeft:"5%"
    }}>
    <input type="submit" value="Test Connection" className = 'button'></input>
 <input type="submit" value="Save and Continue" className = 'button'></input>
    </div>

    </div>
    </form>
    </div>
    )
}

export default AddaDatastore
