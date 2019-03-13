import React from 'react';
import { connect } from 'react-redux';

import { removeEntry, toggleEntry } from '../actions/actions';

class Entry extends React.Component {
    constructor(props) {
        super(props);

        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onEntryClick = this.onEntryClick.bind(this);
    }

    onDeleteClick() {
        this.props.removeEntry(this.props.id, this.props.listId)
    }
    onEntryClick() {
        this.props.toggleEntry(this.props.id, this.props.listId)
    }

    render() {
        return (
            <li 
                onClick={this.onEntryClick} 
                className={this.props.isToggled ? 
                    "completed" : "notCompleted"    
                }
            >
                <span className="badge">
                    {this.props.person}, {this.props.time}
                </span> <br />
                {this.props.task}
                <button onClick={this.onDeleteClick}>X</button>
            </li>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return ({isToggled: state.entries[ownProps.listId][ownProps.id].isToggled});
};
export default connect(mapStateToProps, {removeEntry, toggleEntry})(Entry);