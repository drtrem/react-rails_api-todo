import React, { Component } from 'react';
import axios from 'axios';
import EditTaskForm from './EditTaskForm';
import Task from './Task';
import NewTaskForm from './NewTaskForm';

class TasksContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: [],
      editingtaskId: null
    }
    this.removeTask = this.removeTask.bind(this)
    this.editingTask = this.editingTask.bind(this)
    this.editTask = this.editTask.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  componentDidMount() {
    axios.get('/api/v1/tasks.json')
    .then((response) => {
      console.log(response)
      this.setState({
        tasks: response.data
      });
    })
    .catch((error) => {console.log(error)})
  }
  addNewTask(project_id, name, status) {
    axios.post( '/api/v1/tasks', { task: {project_id, name, status} })
    .then((response) => {
      console.log(response)
      const tasks = [ ...this.state.tasks, response.data ]
      this.setState({tasks})
    })
    .catch((error) => {console.log(error)})
  }
  removeTask(id) {
    axios.delete( '/api/v1/tasks/' + id )
    .then((response) => {
      const tasks = this.state.tasks.filter(
        (task) => task.id !== id
      )
      this.setState({tasks})
    })
    .catch((error) => {console.log(error)})
  }
  editingTask(id) {
    this.setState({
      editingTaskId: id
    })
  }
  editTask(id, name, status, project_id) {
    axios.put( '/api/v1/tasks/' + id, { task: {name, status} })
    .then((response) => {
      console.log(response);
      const tasks = this.state.tasks;
      tasks.forEach ( (task,i) => {
        if ( task.id === id ) {
          tasks[i] = {id, status, name, project_id}
        }
      })
    this.setState(() => ({
      tasks, 
      editingTaskId: null
    }));
    })
    .catch((error) => {console.log(error)})
  }
  handleInputChange(id, name, status, project_id) {
    axios.put( '/api/v1/tasks/' + id, { task: {status} })
    .then((response) => {
      console.log(response);
      const tasks = this.state.tasks;
      tasks.forEach ( (task,i) => {
        if ( task.id === id ) {
          tasks[i] = {id, status, name, project_id}
        }
      })
      this.setState(() => ({
        tasks
      }));
    })
    .catch((error) => {console.log(error)})
  }

  render() {
    return (
      <div className="tasks-container">
        <NewTaskForm onNewTask={this.addNewTask} id={this.props.id} />
        <hr/>
        {this.state.tasks.map( task => {
          if ( this.state.editingTaskId === task.id ) {
            return (<EditTaskForm 
              task={task} 
              key={task.id} 
              editTask={this.editTask}/>)
          } else {
              if (task.project_id === this.props.id) {
                return (<Task
                  task={task} 
                  key={task.id}
                  onRemoveTask={this.removeTask}
                  editingTask={this.editingTask} 
                  moveTask={this.moveTask}
                  onHandleInputChange={this.handleInputChange}/>);
              }
            }
        })}
      </div>
    )
  }
}

export default TasksContainer;