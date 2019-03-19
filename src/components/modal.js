import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleModal } from "../actions/actions";

const Modal = props => {
    return (
        <div className="modalContainer">
            <div
                className={
                    "overlay " + (props.isVisible ? "visible" : "hidden")
                }
            />
            <div
                className={
                    "customModal " + (props.isVisible ? "visible" : "hidden")
                }
            >
                {props.children}
                <button
                    className="btn btn-danger btn-topright"
                    onClick={props.toggleModal}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};
const mapStateToProps = state => ({ isVisible: state.isModalVisible });
export default connect(
    mapStateToProps,
    { toggleModal }
)(Modal);
