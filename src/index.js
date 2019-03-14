// React imports
import React from "react";
import ReactDOM from "react-dom";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

// CSS import
import "./css/index.css";

// Bootstrap
import "bootstrap";

// Components import
import Calendar from "./components/calendar";
import NewPersonForm from "./components/newpersonform";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2 className="display-3">{this.props.title}</h2>

                    <h3 className="text-muted">
                        Manage your weekly duties. Easily.
                    </h3>
                    <hr className="my-4" />
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <p className="lead">
                                Easily manage your weekly tasks and structurize
                                your time, so you can more time fishing,
                                cooking, knitting or doing whatever it is that
                                you like to do! Get started by adding a person
                                to the right...
                            </p>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <NewPersonForm />
                        </div>
                    </div>
                </div>

                <Calendar />
            </div>
        );
    }
}

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

ReactDOM.render(
    <Provider store={store}>
        <App title="Week Management" />
    </Provider>,
    document.getElementById("root")
);
