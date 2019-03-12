import React from 'react';
import { connect } from 'react-redux';

// Components
import NewPersonForm from './newpersonform';
import Lists from './lists';

// Redux
import { clearCalendar } from '../actions/actions';


class Calendar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            persons: ['Select a person...', 'Lasse', 'Kathrine'],
        };

        this.handleClear = this.handleClear.bind(this);
        //this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleClear() {
        this.props.clearCalendar();
    }

    render() {
        return (
            <div className="calendar-container">
                <div className="buttons">
                    <NewPersonForm />
                    <button onClick={this.handleClear}>Clear calendar</button>
                </div>
                <br />
                <Lists />
            </div>
        );
    }
}
export default connect(null, {clearCalendar})(Calendar);