import React from 'react';
import { connect } from 'react-redux';

// Components
import NewEntryForm from './newentryform';
import Entry from './entry';

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
            return this.props.entries.allIds.map(
                (current,index) => {
                    const thisEntry = this.props.entries[current];
                    if (thisEntry) {
                        return (
                            <Entry 
                                key={this.props.entries.allIds[index]}
                                id={this.props.entries.allIds[index]}
                                listId={this.props.id}
                                person={thisEntry.person}
                                time={thisEntry.time}
                                task={thisEntry.task}
                            />
                        );
                    }
                }
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