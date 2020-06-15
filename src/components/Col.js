import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Col extends Component {
    render() {
        let {
            style,
            className,
            xs,
            sm,
            md,
            lg,
            xsOffset,
            smOffset,
            mdOffset,
            lgOffset,
            children,
           ...rest
        } = this.props;
        const params = {
            col: {
                ...rest,
                style,
                className,
            },
            offset: {
                className: ''
            }
        };
        xsOffset = xsOffset ?? '0';
        smOffset = smOffset ?? xsOffset;
        mdOffset = mdOffset ?? smOffset ?? xsOffset;
        lgOffset = lgOffset ?? mdOffset ?? smOffset ?? xsOffset;

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
                    {children}
                </section>
            </Fragment>
        );
    }
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
        xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        xsOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        smOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        mdOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        lgOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    };

    static defaultProps = {
        className: '',
        xs: '12'
    };
}

