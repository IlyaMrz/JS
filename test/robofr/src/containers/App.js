import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(usersi => this.setState({ robots: usersi }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }


    render() {
        const { robots, searchfield } = this.state;
        const filteredrobors = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>loading</h1> :
            <div className='tc'>
                <h1>Cat Friends~!</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredrobors} />
                    </ErrorBoundry>
                </Scroll>

            </div>


    }
}
export default App;
