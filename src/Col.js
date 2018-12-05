import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SPAN_OPTIONS = {
    xs: 'rlg-col-xs-',
    sm: 'rlg-col-sm-',
    md: 'rlg-col-md-',
    lg: 'rlg-col-lg-'
};

const OFFSET_OPTIONS = {
    xs: 'rlg-col-xs-offset-',
    sm: 'rlg-col-sm-offset-',
    md: 'rlg-col-md-offset-',
    lg: 'rlg-col-lg-offset-'
};

export default class Col extends Component {
    static propTypes = {
        span: PropTypes.object.isRequired,
        offset: PropTypes.object.isRequired
    }

    render() {
        const { span, offset } = this.props;
        const params = {
            col: {
                style: this.props.style,
                className: ''
            },
            offset: {
                className: ''
            }
        };

        const spanClassName = Object.keys(span).map(function(key, index) {
          return SPAN_OPTIONS[key] + span[key];
        });
        params.col.className = spanClassName.join(' ');

        const offsetClassName = Object.keys(offset).map(function(key, index) {
          return OFFSET_OPTIONS[key] + offset[key];
        });
        params.offset.className = offsetClassName.join(' ');

        return ([
            <section key='offset' {...params.offset} />,
            <section key='col' {...params.col}>
                {this.props.children}
            </section>
        ]);
    }
}
