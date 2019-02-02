import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Container extends Component {
    render() {
        const { className, ...rest } = this.props;
        const params = {
            ...rest,
            className: `container ${this.props.className}`
        };
        delete params.fluid;

        if (this.props.fluid) params.className += ' container-fluid';

        return (<section {...params} >
            {this.props.children}
        </section>);
    }
}

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    fluid: PropTypes.bool
};

Container.defaultProps = {
    className: '',
    fluid: false
};