import React, { Component } from 'react';
export default class Col extends Component {
    render() {
        const params = {
            col: {
                style: this.props.style,
                className: ''
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