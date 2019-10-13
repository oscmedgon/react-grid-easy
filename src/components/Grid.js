import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Grid extends Component {
    render () {
        const {className, revertMargin, children, gap, ...rest} = this.props;
        const params = {
            grid: {
                ...rest,
                className: 'grid',
                style: {gridGap: `${gap}px`}
            },
            parent: {
                className: 'grid-parent'
            }
        };
        if (revertMargin) {
            params.parent.className += ' no-margin'
        }

        if (className) {
            params.grid.className += ` ${className}-grid`;
            params.parent.className += ` ${className}-parent`;
        }
        return (
            <section {...params.parent}>
                <section {...params.grid}>
                    {children}
                </section>
            </section>
        );
    }

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
        revertMargin: PropTypes.bool,
        gap: PropTypes.number
    };

    static defaultProps = {
        className: '',
        revertMargin: false,
        gap: 21
    }
}
