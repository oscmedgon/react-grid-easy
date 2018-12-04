import React, { Component } from 'react';
export default class Row extends Component {
    render() {
        return (<section className='rlg-row'>
            {this.props.children}
        </section>);
    }
}