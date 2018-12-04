import React, { Component } from 'react';
export default class Grid extends Component {
    render() {
        return (<section className='grid'>
            {this.props.children}
        </section>);
    }
}