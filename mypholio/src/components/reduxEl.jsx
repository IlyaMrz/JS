//redux

import React from 'react';
import { connect } from 'react-redux';
import { setDeacrease, setIncrease } from '../redux/actions';

const mapStateToProps = (state) => {
    return {count: state.countRedState}
} 

const mapDispatchToState = (dispatch) => {
    return {
        toggleIncreaseInner: () => dispatch(setIncrease()),
        toggleDecreaseInner: () => dispatch(setDeacrease())
    }
    
}

class ReduxEl extends React.Component {

    render() {
    const {toggleIncreaseInner,toggleDecreaseInner} = this.props;
    const count = this.props.count;

        return (<div style={{backgroundColor:"#c8c6a7",display:'flex', justifyContent:'center',alignItems:'center', height: "33%"}}>
        <div style={{backgroundColor: "#6e7c7c",
        borderRadius:"0 65px 0 65px",
        display:"flex",
        boxShadow: "0 0 0 5px coral, 0 0 0 10px #435560, 0 0 0 15px grey",
        height: "35%",
        width: "600px",
        justifyContent:"space-around"}}>
            <div style={{color:'white'}}>simple as fuck <br /> second line <br /> third line</div>
                <p style={{color:"white"}}>redux<br></br>{count}</p>
                <div style={{display:"flex",flexDirection:"column", justifyContent:'center'}}>
                    <button onClick={toggleIncreaseInner} style={{margin:"4px 10px"}}>button click me</button>
                    <button onClick={toggleDecreaseInner} style={{margin:"4px 10px"}}>decrease</button>
                </div>
                <div style={{color:'white', marginRight:'15px'}}>
                {count}{count}{count}{count}
               </div>
            </div>
        </div>
        )

    }
}


export default connect(mapStateToProps,mapDispatchToState)(ReduxEl);