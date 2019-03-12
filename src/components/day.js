import React from 'react';

import NewEntryForm from './newentryform';
import Entry from './entry';

export default class Day extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(newEntryData) {
        this.props.onFormSubmit(newEntryData);
    }
    render() {
        const dayEntries = this.props.entries.slice();

        const dayEntriesList = dayEntries.map(
            (current) =>
                <Entry 
                    person={current.person}
                    time={current.time}
                    task={current.task}
                    id={current.id}
                />
        );

        return (
            <div className="day">
                <h3>{this.props.name}</h3>
                <ul>
                    {dayEntriesList}
                </ul>
                <NewEntryForm
                    persons={this.props.persons}
                    onFormSubmit={this.handleFormSubmit}
                    />
            </div>
        );
    }
}