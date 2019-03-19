import React from "react";
import { connect } from "react-redux";

// Components
import Lists from "./lists";
import Modal from "./modal";

// Redux
import { clearCalendar } from "../actions/actions";

class Calendar extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Lists />
                </div>
                <Modal>
                    <h2>That's not a valid entry!</h2>
                    <p className="lead">
                        Did you choose a person? And set the task? Remember to
                        use 24h-formatting (ie. 13:50). Try again. You can add a
                        person at the top of this page.
                    </p>
                </Modal>
            </div>
        );
    }
}
export default connect(
    null,
    { clearCalendar }
)(Calendar);
