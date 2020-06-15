import React, { Component } from 'react';
import TaskForm from '../components/TaskForm';
import ListTask from '../components/ListTask';
import { getByUSerId, saveTask, getTask, updateTask } from '../services/TaskService';
import { removeUserSession } from '../utils/Auth';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
          items: [],
          name: '',
          date: '',
          description: '',
          _id: ''
        }
    }
    
    componentDidMount(){
        this.getTasks();
    }

    getTasks = () => {
        getByUSerId().then(({data: { tasks }}) => {
            console.log(tasks)
            this.setState({items: tasks})
        })
    }

    getTasksById = (task) => {
        const { name, description, date, _id } = task;
        this.setState({ name, description, date, _id });
    }

    handleSaveTask = e => {
        e.preventDefault()
        const { name, description, date, items, _id } = this.state;
        if(_id !== ''){
            updateTask(_id, { name, description, date }).then(({data: {task}}) => {
                const item = items.find(x => x._id === task._id)
                const index = items.indexOf(item);
                items[index] = task;
                this.setState({items, name: '', date: '', description: '', _id: ''})
            })
        }else{
            saveTask({ name, description, date }).then(({data: {task}}) => {
                items.push(task);
                this.setState({items, name: '', date: '', description: '', _id: ''})
            })
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    logout = () => {
        removeUserSession();
        this.props.history.push('/login');
    }

    render() {
        const {name, date, description } = this.state;
        return (
        <div className="todoListMain">
            <nav className="navbar navbar-light bg-light">
                <a onClick={this.logout} className="navbar-brand pointer">Logout</a>
            </nav>
            <div className="header">
            <TaskForm 
                handleSaveTask={this.handleSaveTask}   
                handleChange={this.handleChange}
                name={name} 
                description={description}
                date={date}
            />
            <ListTask 
                items={this.state.items}
                getTasksById={this.getTasksById}
            />
            </div>
        </div>
        )
    }
}
export default Dashboard