import React, { Component } from 'react';
class EditProjectForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.project.id,
            name: this.props.project.name
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { id, name } = this.state;
        this.props.editProject(id, name);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input  name="name"
                    type="text"
                    placeholder="Title..."
                    value={this.state.name}
                    onChange={this.handleChange} />
            <button>Update Project</button>
        </form>  
        )
    }
}
export default EditProjectForm;