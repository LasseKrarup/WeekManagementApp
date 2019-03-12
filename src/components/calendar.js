import React from 'react';

import NewPersonForm from './newpersonform';
import Day from './day'

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            persons: ['Select a person...', 'Lasse', 'Kathrine'],
            entries: [],
        };

        this.handleClear = this.handleClear.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleClear() {
        alert('clear');
    }
    handleFormSubmit(newEntryData) {
        // use immutable concat function and setState because direct changing of state is not allowed in React
        const newEntryList = this.state.entries.concat({
            person: newEntryData.selectedPerson,
            time: newEntryData.newTime,
            task: newEntryData.newTask,
        });
        this.setState({entries: newEntryList})
    }

    render() {

        const dayElements = DAYS.map(
            (day, index) => 
                <Day 
                    name={day}
                    persons={this.state.persons}
                    entries={this.state.entries}
                    onFormSubmit={this.handleFormSubmit}  />
        );

        return (
            <div className="calendar-container">
                <div className="buttons">
                    <NewPersonForm />
                    <button onClick={this.handleClear}>Clear calendar</button>
                </div>
                {dayElements}
            </div>
        );
    }
}