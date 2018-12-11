import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Col extends Component {
    render() {
        const params = {
            col: {
                style: this.props.style,
                className: this.props.className
            },
            offset: {
                className: ''
            }
        };
        const { xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset } = this.props;
        if (xs)
            params.col.className += (' rlg-col-xs-' + xs);
        if (sm)
            params.col.className += (' rlg-col-sm-' + sm);
        if (md)
            params.col.className += (' rlg-col-md-' + md);
        if (lg)
            params.col.className += (' rlg-col-lg-' + lg);
        if (xsOffset)
            params.offset.className += (' rlg-col-xs-offset-' + xsOffset);
        if (smOffset)
            params.offset.className += (' rlg-col-sm-offset-' + smOffset);
        if (mdOffset)
            params.offset.className += (' rlg-col-md-offset-' + mdOffset);
        if (lgOffset)
            params.offset.className += (' rlg-col-lg-offset-' + lgOffset);
        return ([
            <section key='offset' {...params.offset} />,
            <section key='col' {...params.col}>
                {this.props.children}
            </section>
        ]);
    }
}

Col.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xsOffset: PropTypes.string,
    smOffset: PropTypes.string,
    mdOffset: PropTypes.string,
    lgOffset: PropTypes.string
};

Col.defaultProps = {
    className: ''
};