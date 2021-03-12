//hooks
import React, { useState } from 'react';

function HooksEl() {
    const [count, setCount] = useState(110);

    function increase() {
        setCount(count+7)
    }

    function decrease() {
        setCount(count-3)
    }

    return (
        <div style={{backgroundColor:"#c8c6a7",display:'flex', justifyContent:'center',alignItems:'center', height: "34%"}}>
        <div style={{backgroundColor: "#6e7c7c",
        borderRadius:"0 65px 0 65px",
        display:"flex",
        boxShadow: "0 0 0 5px coral, 0 0 0 10px #435560, 0 0 0 15px grey",
        height: "35%",
        width: "600px",
        justifyContent:"space-around"}}>
            <div style={{color:'white'}}>simple as fuck <br /> second line <br /> third line</div>
                <p style={{color:"white"}}>hooks<br></br>{count}</p>
                <div style={{display:"flex",flexDirection:"column", justifyContent:'center'}}>
                    <button onClick={increase} style={{margin:"4px 10px"}}>button click me</button>
                    <button onClick={decrease} style={{margin:"4px 10px"}}>decrease</button>
                </div>
                <div style={{color:'white', marginRight:'15px'}}>
                {count}{count}{count}{count}
               </div>
            </div>
        </div>
    )
}

export default HooksEl;