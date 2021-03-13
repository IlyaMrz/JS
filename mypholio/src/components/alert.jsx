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

        <Alert show={show} variant="success" style={{margin:'30px',opacity:'0.94',zIndex:'5',width:"450px",display:"flex", justifyContent:"space-between", position:"absolute"}}>
          How's reading -> have a nice day :)
          
          <Button style={{padding:"2px", margin: "0"}} onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </Alert>
  

      </>
    );
  }
  
export default AlertComponent;