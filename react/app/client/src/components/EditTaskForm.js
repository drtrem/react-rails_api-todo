import React, { Component } from 'react';

class EditTaskForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        task: this.props.task
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    const task = this.state;
    this.props.editTask(task);
  }
  
  render(){
    return(
      <div className="col-lg-offset-2 col-lg-8 task-change">
        <form className="change-task inputtop" onSubmit={this.handleSubmit}>
          <input  name="name"
            type="text"
            placeholder="Title..."
            value={this.state.task.name}
            onChange={this.handleChange} />
          <button className="add-task-btn-task">Update Task</button>
        </form> 
      </div>
    )
  }
}

export default EditTaskForm;
 