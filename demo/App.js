import React, {Component, Fragment} from 'react';
import {Container, Grid, Col, Row} from '../lib'

export default class App extends Component {
    state = {
        elements: 10,
        fluid: true,
        revertMargin: false,
        gap: 21
    };

    handleChangeInput = ({target: {value, id}}) => {
        this.setState({
            [id]: +value
        })
    };

    handleChangeCheckbox = ({target: {checked, id}}) => {
        this.setState({
            [id]: checked
        })
    };

    render() {
        const {elements, fluid, revertMargin, gap} = this.state;
        return (
            <Container fluid={fluid}>
                <Grid revertMargin={revertMargin} gap={{row: gap, column: 30}} divisions={6}>
                    <div>
                        <div>
                            <label htmlFor='elements'>Number of columns: </label>
                            <input type='number' id='elements' value={elements} onChange={this.handleChangeInput}/>
                        </div>
                        <div>
                            <label htmlFor='gap'>Grid and rows gap: </label>
                            <input type='number' id='gap' value={gap} onChange={this.handleChangeInput}/>
                        </div>
                        <div>
                            <input type='checkbox' id='fluid' onChange={this.handleChangeCheckbox} checked={fluid} />
                            <label htmlFor='fluid'>Container fluid </label>
                            <input type='checkbox' id='revertMargin' onChange={this.handleChangeCheckbox} checked={revertMargin} />
                            <label htmlFor='revertMargin'>Revert margin </label>
                        </div>
                    </div>
                    {Array(elements).fill('').map((e, i) => <Column index={i} gap={gap} />)}
                </Grid>
            </Container>
        )
    }
}

class Column extends Component {
    state = {
        sizes: {
            xs: '12',
            sm: '6',
            md: '4',
            lg: '3',
            xsOffset: undefined,
            smOffset: undefined,
            mdOffset: undefined,
            lgOffset: undefined
        },
        row: false
    };

    handleToggleRow = () => {
        this.setState((state) => {
            state.row = !state.row;
            return state;
        })
    };

    handleChangeSizes = ({target: {id, value}}) => {
        this.setState((state) => {
            state.sizes[id] = value >= 0 ? value : undefined;
            return state;
        })
    };

    render() {
        const {sizes, row} = this.state;
        const {index} = this.props;
        return (
            <Col {...sizes} style={{backgroundColor: index % 2 === 0 ? 'lightgrey' : '#fafafa', padding: 40, position: 'relative'}}>
                <span
                    onClick={this.handleToggleRow}
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        cursor: 'pointer'
                    }}
                >
                    Toggle row
                </span>
                {row &&
                    <Row gap={this.props.gap} style={{backgroundColor: 'purple', color: 'white', padding: 10}}>
                        <span>This is a row (Subgrid)</span>
                        <Col xs='12' sm='6' style={{height: 80, border: '1px solid white'}}>
                            This is a col
                        </Col>
                        <Col xs='12' sm='6' style={{height: 80, border: '1px solid white'}}>
                            This is a col
                        </Col>
                    </Row>
                }
                {!row &&
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {Object.keys(sizes).map((e) => (
                            <div key={e}>
                                <input min='-1' max='12' type='number' value={sizes[e] || '-1'} id={e} onChange={this.handleChangeSizes} />
                                <label htmlFor={e}>Size {e}</label>
                            </div>
                        ))}
                    </div>
                }
            </Col>
        )
    }
}
