import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';

class AppRedux extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        };
    }

    addLibrary() {
        this.props.addElement(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={(e) => this.setState({ inputValue: e.target.value })}
                />
                <button onClick={() => this.addLibrary()}>Click me</button>
                <ul>
                    {this.props.libraries.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        libraries: state, // Состояние редьюсера
    }),
    dispatch => ({
        addElement: elem => {
            dispatch({ type: 'ADD_LOB', payload: elem });
        },
    }),
)(AppRedux);