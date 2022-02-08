import React from 'react';
import './NewTodoForm.css'


export default class NewTodoForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.inputHandleChange = this.inputHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputHandleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
       
        this.props.addTodo(this.state);
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='task'></label>
                    <input id='task' type="text" value={this.state.text} onChange={this.inputHandleChange}/>                
                <button>Add</button>
            </form>
        )
    }
}