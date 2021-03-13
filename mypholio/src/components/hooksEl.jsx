//hooks
import "./states.scss";
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
        <div className="first">
        <div className="second">
            <div>simple as fuck <br /> second line <br /> third line</div>
                <p>hooks<br></br>{count}</p>
                <div className="third">
                    <button onClick={increase}>button click me</button>
                    <button onClick={decrease}>decrease</button>
                </div>
                <div className='last'>
                {count}{count}{count}{count}
               </div>
            </div>
        </div>
    )
}

export default HooksEl;