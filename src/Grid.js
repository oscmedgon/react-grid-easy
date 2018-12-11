import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Grid extends Component {
    render() {
        const params = {
            className: `rlg-grid ${this.props.className}`
        }
        return (<section {...params}>
            {this.props.children}
        </section>);
    }
}

Grid.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

Grid.defaultProps = {
    className: ''
};