import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Grid extends Component {
    render () {
        const {className, revertMargin, children, gap, column, divisions: shallowDiversions, vertical, columnSettings, ...rest} = this.props;
        let divisions = parseInt(shallowDiversions, 10);
        if (!(divisions > 0 && divisions <= 20)) {
            divisions = 12;
            console.error(new Error(`The prop errors should be between 1 and 20 but got ${this.props.divisions}`));
        }
        const params = {
            grid: {
                ...rest,
                className: `grid grid-${divisions} ${vertical ? 'vertical-grid' : ''}`,
                style: {gridGap: `${gap}px`}
            },
            parent: {
                className: 'grid-parent'
            }
        };
        let columnGap;
        params.grid.style['--column'] = `${100 / divisions}%`;
        if (['string', 'number'].includes(typeof gap)) {
            params.grid.style.gridGap = gap;
            params.grid.style['--gap'] = `${((divisions - 1) * gap) / divisions}px`;
        } else if (typeof gap === 'object' && gap && !Array.isArray(gap)) {
            const {column = 21, row = 21} = gap;
            params.grid.style.rowGap = row;
            params.grid.style.columnGap = column;
            params.grid.style['--gap'] = `${((divisions - 1) * column) / divisions}px`;
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
                <section {...params.grid} data-gap={columnGap}>
                    {children}
                </section>
            </section>
        );
    }

    static propTypes = {
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
        divisions: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        vertical: PropTypes.bool,
    };

    static defaultProps = {
        className: '',
        revertMargin: false,
        gap: 21,
        vertical: false,
        divisions: 12,
        columnSettings: null,
    }
}
