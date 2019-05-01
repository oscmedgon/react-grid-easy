import React, {Component} from 'react';
import {Container, Grid, Col} from '../../dist'

export default class App extends Component {
    state = {
        elements: 10,
        fluid: true
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
        const {elements, fluid} = this.state;
        return (
            <Container fluid={fluid}>
                <Grid>
                    <div>
                        <input type='number' id='elements' value={elements} onChange={this.handleChangeInput}/>
                        <input type='checkbox' id='fluid' onChange={this.handleChangeCheckbox} checked={fluid} />
                        <label htmlFor='fluid'>Container fluid</label>
                    </div>
                    {Array(elements).fill('').map((e, i) => (
                        <Col xs='12' sm='6' md='4' lg='3' style={{backgroundColor: i % 2 === 0 ? 'lightgrey' : '#fafafa'}}>
                            This is a col
                        </Col>
                    ))}
                </Grid>
            </Container>
        )
    }
}