//simple state
import React from 'react';
import "./states.scss";

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
            <div className="first">
                <div className="second">
                    <div>simple as fuck <br /> second line <br /> third line</div>
                    <p>simple state <br></br>{innerCount}</p>
                    <div className="third">
                        <button onClick={this.increase}>button click me</button>
                        <button onClick={this.decrease}>decrease</button>
                    </div>
                    <div className="last">
                    {innerCount}{innerCount}
                   </div>
                </div>
            </div>
        )
    }
}

export default SimpleStateEl;