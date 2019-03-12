import React from 'react';

import PersonListSelect from './personlistselect';

export default class NewEntryForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedPerson: '',
            newTime: '',
            newTask: '',
        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleSelectChange(selectedVal) {
        this.setState({selectedPerson: selectedVal});
    }
    handleTextChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        } 
        );
    }
    handleFormSubmit(e) {
        //pass state to prop function
        this.props.onFormSubmit(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <PersonListSelect 
                    persons={this.props.persons}
                    selectedPerson={this.state.selectedPerson}
                    onSelectChange={this.handleSelectChange} /><br />
                <input type="text" value={this.state.newTime} onChange={this.handleTextChange} name="newTime" placeholder="Enter time here..."/><br />
                <textarea value={this.state.newTask} onChange={this.handleTextChange} name="newTask" placeholder="Enter task description here..."/><br />
                <input type="submit" value="Add new task" />
            </form>
        );
    }
}