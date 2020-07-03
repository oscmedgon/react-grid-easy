import React  from 'react';
import styled from 'styled-components';
import {getGridSettings} from './Grid';

const StyledRow = styled.section`
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

/**
 *
 * @param revertMargin {boolean}
 * @param className {string}
 * @param gap {number || string || object}
 * @param gap.column {number || string}
 * @param gap.row {number || string}
 * @param divisions {number}
 * @param rest {any}
 * @return {*}
 * @constructor
 */
export default function Row({
    revertMargin = false,
    className = '',
    gap = 20,
    divisions = 12,
    ...rest
}) {
    const settings = getGridSettings(gap, divisions)
    const props = {
        revertMargin,
        gap,
        divisions,
        settings,
        ...rest
    };
    return (
        <StyledRow {...props} className={`row ${className}`} />
    );
}
