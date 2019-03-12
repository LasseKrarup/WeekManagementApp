import React from 'react';
import { connect } from 'react-redux';

import List from './list';

class Lists extends React.Component {
    render() {
        const listsArray = this.props.lists.map(
            (day, index) => 
                <List 
                    name={day.name}
                    key={index}
                    id={index}
                />
        );

        return (
            <div className="lists-container">
                {listsArray}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return ({
        lists: state.lists
    });
;}
export default connect(mapStateToProps)(Lists);