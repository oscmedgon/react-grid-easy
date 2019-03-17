import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Container extends Component {
    render() {
        const { className, fluid, ...rest } = this.props;
        const params = {
            ...rest,
            className: `container ${className}`
        };

        if (fluid) params.className += ' container-fluid';

        return (
            <section {...params} />
        );
    }
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
        fluid: PropTypes.bool
    };

    static defaultProps = {
        className: '',
        fluid: false
    };
}

