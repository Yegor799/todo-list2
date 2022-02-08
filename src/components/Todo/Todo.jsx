import React from 'react';
import './Todo.css'

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditClicked: false,
            text: this.props.text,
            
        }
        this.delete = this.delete.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggleComplete = this.handleToggleComplete.bind(this);
        
    }

    delete() {
        this.props.delete(this.props.id)
    }

    toggleForm(e) {
        this.setState({
            isEditClicked: !this.state.isEditClicked
        })
    }

    handleEditChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.update(this.props.id, this.state.text);
        this.setState({isEditClicked: false})
    }

    handleToggleComplete() {
        this.props.toggleCompletion(this.props.id)
    }

    
   
    render() {
        let editForm;

        if (this.state.isEditClicked) {
            editForm = (
                <div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.text} onChange={this.handleEditChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            editForm = (
                <div className='Todo'>
                    <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggleComplete}>{this.props.text}</li>
                    <div className='Todo-buttons'>
                        <button onClick={this.toggleForm}>
                            <i class='fas fa-pen'/>
                        </button>
                        <button onClick={this.delete}>
                            <i class='fas fa-trash'/>
                        </button>
                    </div>
                </div>
            );
        }

        return  editForm 
        
    }
}

