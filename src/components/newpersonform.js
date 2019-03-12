import React from 'react'

export default class NewPersonForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text" value="Person" />
                <input type="submit" value="Add person" />
            </form>
        );
    }
}