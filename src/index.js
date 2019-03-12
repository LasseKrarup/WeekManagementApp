// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'

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

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App title="Week Management" />
    </Provider>,
    document.getElementById('root')
);
