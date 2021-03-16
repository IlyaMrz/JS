//redux
import "./states.scss";
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

        return (
        <div className="first">
        <div className="second">
            <div>simple as fuck <br /> second line <br /> third line</div>
                <p >redux<br></br>{count}</p>
                <div className="third">
                    <button onClick={toggleIncreaseInner}>button click me</button>
                    <button onClick={toggleDecreaseInner}>decrease</button>
                </div>
                <div className="last">
                {count}{count}
               </div>
            </div>
        </div>
        )

    }
}


export default connect(mapStateToProps,mapDispatchToState)(ReduxEl);