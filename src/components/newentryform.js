import React from "react";
import { connect } from "react-redux";
import { addEntry, toggleModal } from "../actions/actions";

const uuidv1 = require("uuid/v1");
const initialState = {
    person: "Select a person...",
    time: "",
    task: "",
    valid: false,
    showModal: false
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
            [e.target.name]: e.target.value
        });
    }
    handleFormSubmit(e) {
        e.preventDefault();
        if (
            this.state.person !== "Select a person..." &&
            this.state.time &&
            this.state.task
        ) {
            this.props.addEntry(
                this.state, //pass the entire state as first argument
                uuidv1(), //and id of this entry as second argument
                this.props.listId //and the ID of this list as the third argument
            );
            this.setState(initialState);
        } else {
            this.props.toggleModal();
        }
    }

    render() {
        // Display an option for each person
        const personList = this.props.persons.map(current => {
            return (
                <option value={current.name} key={current.id}>
                    {current.name}
                </option>
            );
        });

        return (
            <div>
                <form onSubmit={this.handleFormSubmit} className="my-2">
                    <div className="form-group">
                        <select
                            className="form-control form-control-sm mb-0"
                            onChange={this.handleChange}
                            value={this.state.person}
                            name="person"
                        >
                            {personList}
                        </select>
                        <input
                            className="form-control form-control-sm"
                            type="text"
                            value={this.state.time}
                            onChange={this.handleChange}
                            name="time"
                            placeholder="Enter time here..."
                        />
                        <div className="input-group">
                            <textarea
                                className="form-control form-control-sm"
                                value={this.state.task}
                                onChange={this.handleChange}
                                name="task"
                                placeholder="Enter task description here..."
                            />
                            <div className="input-group-append">
                                <input
                                    type="submit"
                                    data-toggle="collapse"
                                    data-target={
                                        "#entryform-" + this.props.listId
                                    }
                                    className="btn btn-secondary"
                                    value="OK"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({ persons: state.persons });
const mapDispatchToProps = { addEntry, toggleModal };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewEntryForm);
