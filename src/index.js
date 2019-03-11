// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// CSS import
import './index.css';

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <h1>{this.props.title}</h1>

                <Calendar />
            </div>
        );
    }
}

class Calendar extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         persons: [],
    //         selectedPerson: 'Lasse',
    //         entries: [],
    //     }

    //     this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({selectedPerson: e.target.selectedPerson});
    // }

    render() {

        const dayElements = DAYS.map(
            (day) => 
                <Day name={day} />//selectedPerson={this.state.selectedPerson} onChange={this.handleChange(e)} />
            
        );

        return (
            <div className="calendar-container">
                <div className="buttons">
                    <AddPersonButton />
                    <ClearButton />
                </div>
                {dayElements}
            </div>
        );
    }
}

class Day extends React.Component {
    render() {

        // mock day entries
        const dayEntries = [
            {
                person: 'Kathrine',
                time: '16:30',
                task: 'Studie',
                id: 1,
            },
            {
                person: 'Lasse',
                time: '14:00',
                task: 'Studie',
                id: 2,
            }
        ];

        const dayEntriesList = dayEntries.map(
            (current) =>
                <Entry 
                    person={current.person}
                    time={current.time}
                    task={current.task}
                    id={current.id}
                />
        );

        return (
            <div className="day">
                <h3>{this.props.name}</h3>
                <ul>
                    {dayEntriesList}
                </ul>
                <AddNewEntry />
            </div>
        );
    }
}

class Entry extends React.Component {
    render() {
        return (
            <li key={this.props.id}>
                <span className="badge">
                    {this.props.person}, {this.props.time}
                </span> <br />
                {this.props.task}
            </li>
        );
    }
}

class AddNewEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: ['Flemming', 'Lasse', 'Kathrine'],
            selectedPerson: 'Select a person...',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            selectedPerson: e.target.value,
        });
    }

    render() {
        return (
            <form>
                <PersonListSelect 
                    selectedPerson={this.state.selectedPerson} 
                    persons={this.state.persons}
                    onChange={this.handleChange} /><br />
                <input type="text" value="Time" /><br />
                <input type="text" value="Task" /><br />
                <input type="submit" value="Add new task" />
            </form>
        );
    }
}

class PersonListSelect extends React.Component {
    render() {
        const persons = this.props.persons;
        const personList = persons.map(
            (current,index) => 
            <option value={current} index={index}>{current}</option>
        );

        console.log({personList})

        return (
            <select 
                onChange={this.props.handleChange} 
                value={this.props.selectedPerson}>
                    {personList}
            </select>
        );
    }
}

class AddPersonButton extends React.Component {
    render() {
        return (
            <form>
                <input type="text" value="Person" />
                <input type="submit" value="Add person" />
            </form>
        );
    }
}

class ClearButton extends React.Component {
    render() {
        return(
            <button>Clear calendar</button>
        );
    }
}

ReactDOM.render(
    <App title="Week Management" />,
    document.getElementById('root')
);
