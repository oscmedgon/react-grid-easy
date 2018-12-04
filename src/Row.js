import React, { Component } from 'react';
export default class Row extends Component {
    render() {
        return (<section className='row'>
            {this.props.children}
        </section>);
    }
}