import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
    todos: Todo[],
    fetchTodos: Function, //workaround
    deleteTodo: typeof deleteTodo

}

interface AppState {
    fetching: boolean
}

export class _App extends React.Component<AppProps, AppState> {
    constructor(props:AppProps){
        super(props)

        this.state = {fetching:false}
    }

    componentDidUpdate(prevProps:AppProps):void{
        if (!prevProps.todos.length && this.props.todos.length){
            this.setState({fetching:false})
        }
    }


    onFetch=():void=>{
        this.props.fetchTodos()
        this.setState({fetching:true})
    }
    removeTodo=(id:number):void=>{
        this.props.deleteTodo(id)
    }
    renderList():JSX.Element[] {
        return this.props.todos.map((todo:Todo)=>{
            return <div key={todo.id} onClick={() => this.removeTodo(todo.id)}>{todo.title}</div>
        })
    }
    render(){
        return <div>
            <button onClick={this.onFetch}>Fetch</button>
            {this.state.fetching?"   ........Loading":null}
            {this.renderList()}
        </div>
    }
}

const mapStateToProps = (state:StoreState): {todos:Todo[]} =>{
    return { todos: state.todos}
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)