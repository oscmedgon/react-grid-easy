import React, { Component, Fragment } from 'react';
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
        const {xs, sm, md, lg} = this.props;
        let {xsOffset, smOffset, mdOffset, lgOffset} = this.props;
        xsOffset = xsOffset || '0';
        smOffset = smOffset || xsOffset;
        mdOffset = mdOffset || smOffset || xsOffset;
        lgOffset = lgOffset || mdOffset || smOffset || xsOffset;

        if (xs) {
            params.col.className += (' col-xs-' + xs);
        }
        if (sm) {
            params.col.className += (' col-sm-' + sm);
        }
        if (md) {
            params.col.className += (' col-md-' + md);
        }
        if (lg) {
            params.col.className += (' col-lg-' + lg);
        }
        if (xsOffset) {
            params.offset.className += (' col-xs-offset-' + xsOffset);
        }
        if (smOffset) {
            params.offset.className += (' col-sm-offset-' + smOffset);
        }
        if (mdOffset) {
            params.offset.className += (' col-md-offset-' + mdOffset);
        }
        if (lgOffset) {
            params.offset.className += (' col-lg-offset-' + lgOffset);
        }
        return (
            <Fragment>
                <section key='offset' {...params.offset} />
                <section key='col' {...params.col}>
                    {this.props.children}
                </section>
            </Fragment>
        );
    }
    static propTypes = {
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

    static defaultProps = {
        className: '',
        xs: '12'
    };
}

