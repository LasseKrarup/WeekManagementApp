import React from "react";
import { connect } from "react-redux";

// Components
import FormSpawner from "./formSpawner";
import Entry from "./entry";

class List extends React.Component {
    constructor(props) {
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.getEntries = this.getEntries.bind(this);
    }

    handleFormSubmit(newEntryData) {
        this.props.onFormSubmit(newEntryData);
    }

    getEntries() {
        if (this.props.entries) {
            return this.props.entries.allIds.map((current, index) => {
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
            });
        }
    }

    render() {
        return (
            <div className="col-sm-12 col-md-4 col-xl-3 my-3">
                <div className="list">
                    <h5>{this.props.name}</h5>
                    <hr />
                    <FormSpawner listId={this.props.id} />
                    {typeof this.props.entries === "undefined" ? (
                        <p className="text-muted">
                            No entries yet... Add an entry above to display it
                            here.
                        </p>
                    ) : null}
                    <div className="list-group">{this.getEntries()}</div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return { entries: state.entries[ownProps.id] };
};
export default connect(mapStateToProps)(List);
