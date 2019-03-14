import React from "react";

// PersonListSelect class
export default class PersonListSelect extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(event) {
        this.props.onSelectChange(event.target.value);
    }

    render() {
        // Display an option for each person in this.props.persons
        const personList = this.props.persons.map((current, index) => (
            <option value={current} index={index} key={index}>
                {current}
            </option>
        ));

        console.log({ personList });

        return (
            <select
                onChange={this.handleSelectChange}
                value={this.props.selectedPerson}
            >
                {personList}
            </select>
        );
    }
}
