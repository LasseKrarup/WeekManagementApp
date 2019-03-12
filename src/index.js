// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// CSS import
import './index.css';

// Components import
import Calendar from './components/calendar';

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

ReactDOM.render(
    <App title="Week Management" />,
    document.getElementById('root')
);
