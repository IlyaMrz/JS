import React, { useState, useEffect } from 'react';
import { Alert, Button} from 'react-bootstrap';

function AlertComponent() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeId = setTimeout(() => {
          // After 3 seconds set the show value to false
          setShow(false)
        }, 5000)
    
        return () => {
          clearTimeout(timeId)
        }
      }, []);
  
    return (
      <>

        <Alert show={show} variant="success" style={{margin:'30px',opacity:'0.94',zIndex:'5',width:"auto", minWidth: "330px",display:"flex", justifyContent:"space-between", position:"absolute"}}>
          <p style={{margin:"0", padding:"0", marginTop:"2px"}}>Have a nice day :)</p>
          
          <Button style={{padding:"2px", margin: "0", marginLeft:"20px", height:'30px'}} onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </Alert>
  

      </>
    );
  }
  
export default AlertComponent;