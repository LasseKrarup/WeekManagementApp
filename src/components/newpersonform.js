import React from "react";
import { connect } from "react-redux";
import { addPerson, clearCalendar } from "../actions/actions";

class NewPersonForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newPersonText: ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleClick() {
        if (this.state.newPersonText !== "") {
            this.props.addPerson(this.state.newPersonText);
            this.setState({ newPersonText: "" });
        }
    }
    handleTextChange(e) {
        this.setState({
            newPersonText: e.target.value
        });
    }
    handleClear() {
        this.props.clearCalendar();
    }

    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <input
                        className="form-control mb-2"
                        type="text"
                        onChange={this.handleTextChange}
                        value={this.state.newPersonText}
                        placeholder="Enter a person..."
                    />
                </div>
                <div className="row justify-content-start">
                    <div className="col-xl-6 col-l-12">
                        <button
                            className="btn btn-block btn-success"
                            onClick={this.handleClick}
                        >
                            Add person
                        </button>
                    </div>
                    <div className="col-xl-6 col-l-12">
                        <button
                            className="btn btn-block btn-danger"
                            onClick={this.handleClear}
                        >
                            Clear calendar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    null,
    { addPerson, clearCalendar }
)(NewPersonForm);
