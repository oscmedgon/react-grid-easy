import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Row extends Component {
    render() {
        const {revertMargin, className, ...rest} = this.props;
        const params = {
            ...rest,
            className: `row ${revertMargin ? 'no-margin' : ''} ${className}`
        };
        return (
            <section {...params} />
        );
    }
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node.isRequired
    };

    static defaultProps = {
        className: ''
    };

}
