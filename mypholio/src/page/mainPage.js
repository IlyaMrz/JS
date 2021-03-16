import React from 'react';
import SimpleStateEl from '../components/simpleStateEl';
import HooksEl from '../components/hooksEl';
import ReduxEl from '../components/reduxEl';
import NavHeader from '../components/nav';
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AlertComponent from '../components/alert';


function MainPage() {
    return (
        <div class="mainDiv">
                <div id="alert">
                 <AlertComponent />
                </div>
            <Router>
                <div className="nav">
                    <NavHeader />
                </div>
                <Switch>
                    <Route exact path="/" component={SimpleStateEl} />
                    <Route exact path="/reacthooks" component={HooksEl} />
                    <Route exact path="/reactredux" component={ReduxEl} />
                </Switch> 
            </Router>
            <div className="footer">footer</div>
        </div>
    )
}

export default MainPage;