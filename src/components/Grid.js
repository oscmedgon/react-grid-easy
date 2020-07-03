import React from 'react';
import styled from 'styled-components';

export function getGridSettings(gap, divisions) {
    const settings = {};
    settings.column = `${100 / divisions}%`;
    if (['string', 'number'].includes(typeof gap)) {
        settings.rowGap = gap;
        settings.columnGap = gap;
        settings.gap = `${((divisions - 1) * gap) / divisions}px`;
    } else if (typeof gap === 'object' && gap && !Array.isArray(gap)) {
        const {column = 21, row = 21} = gap;
        settings.rowGap = row;
        settings.columnGap = column;
        settings.gap = `${((divisions - 1) * column) / divisions}px`;
    } else {
        const error = new Error('Expected gap to be string, number or object.');
        throw error.stack
    }
    return settings;
}

const StyledParent = styled.section`
        margin-left: ${props => props.fluid ? '-30px' : '-20px'};
        margin-right: ${props => props.fluid ? '-30px' : '-20px'};
        padding-left: ${props => props.revertMargin ? 0 : props.fluid ? '30px' : '20px'};
        padding-right: ${props => props.revertMargin ? 0 : props.fluid ? '30px' : '20px'};
    }
`

const StyledGrid = styled.section`
        --gap: ${props => props.settings.gap};
        --column: ${props => props.settings.column};
        --divisions: ${props => props.divisions};
        column-gap: ${props => props.settings.columnGap}px;
        row-gap: ${props => props.settings.rowGap}px;
        display: grid;
        box-sizing: content-box;
        grid-auto-flow: ${props => props.vertical ? 'column' : 'row'};
        grid-auto-columns: ${props => props.vertical ? 'auto' : 'unset'};
        max-width: ${props => props.fluid ? 'unset' : `${props.maxWidth}px`};
        margin: auto;
        & > :not([class*="col"]) {
            grid-column: span ${props => props.divisions};
        }
        --template-col: calc(var(--column) - var(--gap));
        ${props => props.vertical ? `grid-template-rows: repeat(${props.divisions}, 1fr);`: `grid-template-columns: repeat(${props.divisions}, var(--template-col));`}
    }
`

export default function Grid({
    children,
    className= '',
    revertMargin= false,
    gap= 21,
    vertical= false,
    divisions= 12,
    columnSettings= null,
    maxWidth = 984,
    fluid,
}) {
    const settings = getGridSettings(gap, divisions)
    const parentProps = {
        revertMargin,
        fluid,
    }
    const gridProps = {
        children,
        revertMargin,
        gap,
        vertical,
        divisions,
        columnSettings,
        maxWidth,
        settings,
        fluid,
    }
    return (
        <StyledParent {...parentProps} className={`grid-parent ${className}`}>
            <StyledGrid {...gridProps} className={`grid ${className}`}>
                {children}
            </StyledGrid>
        </StyledParent>
    );

    // static propTypes = {
    //     className: PropTypes.string,
    //     children: PropTypes.node.isRequired,
    //     revertMargin: PropTypes.bool,
    //     gap: PropTypes.oneOfType([
    //         PropTypes.number,
    //         PropTypes.string,
    //         PropTypes.shape({
    //             column: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    //             row: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    //         })
    //     ]),
    //     divisions: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    //     vertical: PropTypes.bool,
    // };
}



