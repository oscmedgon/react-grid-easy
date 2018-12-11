import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Row extends Component {
    render() {
        const params = {
            className: `rlg-row ${this.props.className}`
        }
        return (<section {...params}>
            {this.props.children}
        </section>);
    }
}
Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

Row.defaultProps = {
    className: ''
};