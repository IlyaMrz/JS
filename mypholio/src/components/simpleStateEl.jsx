//simple state
import React from 'react';

class SimpleStateEl extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 43
        }
    }
    increase = () => {
        this.setState({count: this.state.count +1})
    }
    decrease = () => {
        this.setState({count: this.state.count -1})
    }

    render() {
        const innerCount = this.state.count;
        return (
            <div style={{backgroundColor:"#c8c6a7",display:'flex', justifyContent:'center',alignItems:'center', height: "33%"}}>
            <div style={{backgroundColor: "#6e7c7c",
            borderRadius:"0 65px 0 65px",
            display:"flex",
            boxShadow: "0 0 0 5px coral, 0 0 0 10px #435560, 0 0 0 15px grey",
            height: "35%",
            width: "600px",
            justifyContent:"space-around"}}>
                <div style={{color:'white'}}>simple as fuck <br /> second line <br /> third line</div>
                    <p style={{color:"white"}}>simple state <br></br>{innerCount}</p>
                    <div style={{display:"flex",flexDirection:"column", justifyContent:'center'}}>
                        <button onClick={this.increase} style={{margin:"4px 10px"}}>button click me</button>
                        <button onClick={this.decrease} style={{margin:"4px 10px"}}>decrease</button>
                    </div>
                    <div style={{color:'white', marginRight:'15px'}}>
                    {innerCount}{innerCount}{innerCount}{innerCount}
                   </div>
                </div>
            </div>
        )
    }
}

export default SimpleStateEl;