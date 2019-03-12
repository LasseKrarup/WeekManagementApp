import React from 'react';

export default class Entry extends React.Component {
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