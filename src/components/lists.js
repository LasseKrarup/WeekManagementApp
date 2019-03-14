import React from "react";
import { connect } from "react-redux";

import List from "./list";

class Lists extends React.Component {
    render() {
        const listsArray = this.props.lists.map((day, index) => (
            <List name={day.name} key={index} id={day.name} />
        ));

        return <div className="row">{listsArray}</div>;
    }
}
const mapStateToProps = state => {
    return {
        lists: state.lists
    };
};
export default connect(mapStateToProps)(Lists);
