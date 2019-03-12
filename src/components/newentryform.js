import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../actions/actions';

const initialState = {
    person: 'Select a person...',
    time: '',
    task: '',
};
class NewEntryForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        } 
        );
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.props.addEntry(
            this.state, //pass the entire state as first argument
            this.props.listId //and the ID of this list as the second argument
        );
        this.setState(initialState);
    }

    render() {
        // Display an option for each person
        const personList = this.props.persons.map((current) => {
        return (<option value={current.name} key={current.id}>{current.name}</option>);
        });

        return (
            <form onSubmit={this.handleFormSubmit}>
                <select 
                    onChange={this.handleChange} 
                    value={this.state.person}
                    name="person">
                        {personList}
                </select>
                <br />
                <input type="text" value={this.state.time} onChange={this.handleChange} name="time" placeholder="Enter time here..."/><br />
                <textarea value={this.state.task} onChange={this.handleChange} name="task" placeholder="Enter task description here..."/><br />
                <input type="submit" value="Add new task" />
            </form>
        );
    }
}

const mapStateToProps = state => ({persons: state.persons});
const mapDispatchToProps = {addEntry};
export default connect(mapStateToProps, mapDispatchToProps)(NewEntryForm);