import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Grid extends Component {
    render() {
        const { className, ...rest } = this.props;
        const params = {
            ...rest,
            className: 'grid'
        };

        return (
            <section className={`grid-parent ${className}`}>
                <section {...params}>
                    {this.props.children}
                </section>
            </section>
        );
    }
}

Grid.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

Grid.defaultProps = {
    className: ''
};