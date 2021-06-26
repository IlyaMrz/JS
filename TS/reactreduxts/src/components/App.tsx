import { statement } from '@babel/template'
import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
    todos: Todo[],
    fetchTodos():any,

}

export class _App extends React.Component<AppProps> {
    componentDidMount(){
        this.props.fetchTodos()
    }
    render(){
        console.log(this.props.todos)
        return <div>To you hi</div>
    }
}

const mapStateToProps = (state:StoreState): {todos:Todo[]} =>{
    return { todos: state.todos}
}

export const App = connect(mapStateToProps, { fetchTodos })(_App)