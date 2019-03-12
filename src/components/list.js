import React from 'react';

import NewEntryForm from './newentryform';
import Entry from './entry';
import { connect } from 'react-redux';

class List extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.getEntries = this.getEntries.bind(this);
    }

    handleFormSubmit(newEntryData) {
        this.props.onFormSubmit(newEntryData);
    }

    getEntries(){
        if (this.props.entries) {
            return this.props.entries.map(
                (current) => (
                    <Entry 
                        id={current.id}
                        person={current.person}
                        time={current.time}
                        task={current.task}
                        key={current.id}
                    />
                )
            );
        }
    }

    render() {

        return (
            <div className="list">
                <h3>{this.props.name}</h3>
                { this.getEntries() }
                <NewEntryForm
                    persons={this.props.persons}
                    onFormSubmit={this.handleFormSubmit}
                    listId={this.props.id}
                    />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return ({entries: state.entries[ownProps.id]});
}
export default connect(mapStateToProps)(List);