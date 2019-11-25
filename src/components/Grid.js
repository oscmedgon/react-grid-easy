import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Grid extends Component {
    render () {
        const {className, revertMargin, children, gap, column, ...rest} = this.props;
        let divisions = parseInt(this.props.divisions, 10);
        if (!(divisions > 0 && divisions <= 20)) {
            divisions = 12;
            console.error(new Error(`The prop errors should be between 1 and 20 but got ${this.props.divisions}`));
        }
        const params = {
            grid: {
                ...rest,
                className: `grid grid-${divisions}`,
                style: {gridGap: `${gap}px`}
            },
            parent: {
                className: 'grid-parent'
            }
        };
        if (['string', 'number'].includes(typeof gap)) {
            params.grid.style.gridGap = gap;
        } else if (typeof gap === 'object' && gap && !Array.isArray(gap)) {
            const {column = 21, row = 21} = gap;
            params.grid.style.rowGap = row;
            params.grid.style.columnGap = column;
        } else {
            const error = new Error('Expected gap to be string, number or object.');
            console.error(error.stack)
        }
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
        column: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
        revertMargin: PropTypes.bool,
        gap: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.shape({
                column: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
                row: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
            })
        ]),
        divisions: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    };

    static defaultProps = {
        className: '',
        revertMargin: false,
        gap: 21,
        column: false,
        divisions: 12
    }
}
