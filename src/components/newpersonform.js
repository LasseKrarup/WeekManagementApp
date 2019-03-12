import React from 'react'
import { connect } from 'react-redux';
import { addPerson } from '../actions/actions';

class NewPersonForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newPersonText: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleClick() {
        this.props.addPerson(this.state.newPersonText);
        this.setState({newPersonText: ''});
    }
    handleTextChange(e) {
        this.setState({
            newPersonText: e.target.value
        });
    }
    
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleTextChange} value={this.state.newPersonText} placeholder="Enter a person..." />
                <button onClick={this.handleClick}>Add person</button>
            </div>
        );
    }
}
export default connect(
    null,
    {addPerson}
)(NewPersonForm);