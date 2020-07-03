import React from 'react';
import styled from 'styled-components';

import Grid from './Grid'

const fluidSize = '30px'
const standardSize = '20px'
const StyledContainer = styled.section`
    padding-left: ${props => props.fluid ? fluidSize : standardSize};
    padding-right: ${props => props.fluid ? fluidSize : standardSize};
`

export default function Container({
    className = '',
    children = undefined,
    fluid = false,
    revertMargin,
    gap,
    divisions,
    vertical,
}) {
    const containerProps = {
        className: `container ${className}`,
        fluid,
    }
    const gridProps = {
        className,
        children,
        fluid,
        revertMargin,
        gap,
        divisions,
        vertical,
    }
    return (
        <StyledContainer {...containerProps}>
            <Grid {...gridProps}>{children}</Grid>
        </StyledContainer>
    );
};
