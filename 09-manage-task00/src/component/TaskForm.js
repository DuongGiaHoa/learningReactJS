/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            status: false
        }
    }

    componentWillMount() {
        //console.log('componentWillMount');
        if(this.props.task){
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status,
            });
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.task){
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status,
            });
        } else if(!nextProps.task) {
            //console.log('sua thanh them');
            this.setState({
                id: '',
                name: "",
                status: false
            });
        } 
    }

    onCloseForm = () => {
        this.props.onCloseForm();   
    }

    onChange = () => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        // Cancel & Close Form
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }
    render() {
        var {id} = this.state;
        return (
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {id !== '' ? 'Edit Task' : 'Add Task'} 
                            <span 
                                className="far fa-times-circle pull-right"
                                onClick={this.onCloseForm}>
                            </span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Name :</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <label>Status:</label>
                            <select 
                                className="form-control" 
                                required="required"
                                name="status"
                                value={this.state.status} 
                                onChange={this.onChange}
                            >
                                <option value={true}>Active</option>
                                <option value={false}>Inactive</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-success">{id !== '' ? 'Edit' : 'Add'} </button>&nbsp;
                                <button 
                                    type="submit" 
                                    className="btn btn-danger"
                                    onClick={this.onClear}
                                >
                                Exit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}

export default TaskForm;