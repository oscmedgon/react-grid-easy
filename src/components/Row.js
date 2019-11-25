import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Row extends Component {
    render() {
        const {revertMargin, className, gap, ...rest} = this.props;
        const params = {
            ...rest,
            className: `row ${revertMargin ? 'no-margin' : ''} ${className}`,
            style: {gridGap: `${gap}px`}
        };
        return (
            <section {...params} />
        );
    }
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
        gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    };

    static defaultProps = {
        className: '',
        gap: 21
    };

}
