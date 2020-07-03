import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
    tabletMax,
    tabletMin,
    desktopSmMin,
    desktopSmMax,
    desktopLgMin
} from '../constants';

const StyledOffset = styled.section`
    grid-column: span ${props => props.xsOffset};
    display: ${props => props.xsOffset === '0' ? 'none' : 'block'}
    @media (min-width: ${tabletMin}) and (max-width: ${tabletMax}) {
        grid-column: span ${props => props.smOffset};
        display: ${props => props.smOffset === '0' ? 'none' : 'block'}
    }
    @media (min-width: ${desktopSmMin}) and (max-width: ${desktopSmMax}) {
        grid-column: span ${props => props.mdOffset};
        display: ${props => props.mdOffset === '0' ? 'none' : 'block'}
    }
    @media (min-width: ${desktopLgMin}) {
        grid-column: span ${props => props.lgOffset};
        display: ${props => props.lgOffset === '0' ? 'none' : 'block'}
    }
`;

const StyledCol = styled.section`
    grid-column: span ${props => props.xs};
    display: ${props => props.xs === '0' ? 'none' : 'block'}
    @media (min-width: ${tabletMin}) and (max-width: ${tabletMax}) {
        grid-column: span ${props => props.sm};
        display: ${props => props.sm === '0' ? 'none' : 'block'}
    }
    @media (min-width: ${desktopSmMin}) and (max-width: ${desktopSmMax}) {
        grid-column: span ${props => props.md};
        display: ${props => props.md === '0' ? 'none' : 'block'}
    }
    @media (min-width: ${desktopLgMin}) {
        grid-column: span ${props => props.lg};
        display: ${props => props.lg === '0' ? 'none' : 'block'}
    }
     
`
export default function Col({
    className,
    xs = 'var(--divisions)',
    sm = xs || 'var(--divisions)',
    md = sm || xs || 'var(--divisions)',
    lg = md || sm || xs || 'var(--divisions)',
    xsOffset = '0',
    smOffset = xsOffset || '0',
    mdOffset = smOffset || xsOffset || '0',
    lgOffset = mdOffset || smOffset || xsOffset || '0',
    children,
    ...rest
}) {
    const colProps = {
        xs,
        sm,
        md,
        lg,
        ...rest
    }
    const offsetProps = {
        xsOffset,
        smOffset,
        mdOffset,
        lgOffset,
    }
    return (
        <Fragment>
            <StyledOffset key='offset' className={`col-offset`} {...offsetProps} />
            <StyledCol key='col' className={`col ${className}`} {...colProps}>
                {children}
            </StyledCol>
        </Fragment>
    );
}

