import React from "react";
import { connect } from "react-redux";

import { removeEntry, toggleEntry } from "../actions/actions";

class Entry extends React.Component {
    constructor(props) {
        super(props);

        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onEntryClick = this.onEntryClick.bind(this);
    }

    onDeleteClick() {
        this.props.removeEntry(this.props.id, this.props.listId);
    }
    onEntryClick(e) {
        e.preventDefault();
        this.props.toggleEntry(this.props.id, this.props.listId);
    }

    render() {
        return (
            <a
                href="#"
                onClick={this.onEntryClick}
                className={
                    "list-group-item list-group-item-action" +
                    (this.props.isCompleted ? " active" : "") //toggle "active" from redux store state
                }
            >
                <div className="d-flex justify-content-between">
                    <strong>
                        {this.props.person} - {this.props.time}
                    </strong>
                </div>
                <p>{this.props.task}</p>
                <button
                    className="btn btn-danger btn-close btn-topright"
                    onClick={this.onDeleteClick}
                >
                    &times;
                </button>
            </a>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isCompleted: state.entries[ownProps.listId][ownProps.id].isCompleted
    };
};
export default connect(
    mapStateToProps,
    { removeEntry, toggleEntry }
)(Entry);
