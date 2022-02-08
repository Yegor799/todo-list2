import React from 'react';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import Todo from '../Todo/Todo';
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css"

export default class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    addTodo(todo) {
        const newTodo = { ...todo, id: uuidv4(), completed: false, }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    updateTodo(id, updatedText) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: updatedText }
            }
            return todo;
        });

        this.setState({todos: updatedTodos})

    }

    toggleCompletion(id) {
         const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });

        this.setState({todos: updatedTodos})
    }

    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !==id)
        })
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return (
                <Todo
                    key={todo.id}
                    text={todo.text}
                    id={todo.id}
                    completed={todo.completed}
                    delete={this.deleteTodo}
                    update={this.updateTodo}
                    toggleCompletion={this.toggleCompletion}
                />
            )
        })
        return (
            <div className='TodoList'>
                <h1>Todo List</h1>                
                <ul>{todos}</ul>  
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}