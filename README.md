react-lightweight-grid

Component for [React][1] to create a grid system structure in a project. It is developed by [oscmedgon][2]. There is no demo version at this moment, star the repo to stay tunned.

> The grid structure helps developing a responsive site without tons of css.

The package doesn't use bootstrap, uses sass and css grid to creare a really simple but effective grid.

## Installation

    $ npm i react-lightweight-grid

## Usage
```javascript
import React from 'React'
    import {Grid, Col, Row} from 'react-lightweight-grid';
    const gridTest = () => (
        <Grid>
            <h1>Nested components</h1>
            <p>Any nested component without a col component with size propierties fits all the grid</p>
            <Col xs='11' sm='6' md='4' lg='3' xsOffset='1' smOffset='3' mdOffset='4' lgOffset='1'>
                First element
            </Col>
            <Col xs='11' sm='6' md='4' lg='3' xsOffset='1' smOffset='3' mdOffset='4' lgOffset='1'>
                Second element
            </Col>
            <Col xs='11' sm='6' md='4' lg='3' xsOffset='1' smOffset='3' mdOffset='4' lgOffset='1'>
                Third element
            </Col>
            <Col xs='11' sm='6' md='4' lg='3' xsOffset='1' smOffset='3' mdOffset='4' lgOffset='1'>
                Fourth element
            </Col>
            <Row>
                <Col xs='11' sm='6' md='4' lg='3' xsOffset='1' smOffset='3' mdOffset='4' lgOffset='1'>
                First element
            </Col>
            <Col xs='11' sm='6' md='4' lg='3' xsOffset='1' smOffset='3' mdOffset='4' lgOffset='1'>
                Second element
            </Col>
            <Col xs='11' sm='6' md='4' lg='3' xsOffset='1' smOffset='3' mdOffset='4' lgOffset='1'>
                Third element
            </Col>
            <Col xs='11' sm='6' md='4' lg='3' xsOffset='1' smOffset='3' mdOffset='4' lgOffset='1'>
                Fourth element
            </Col>
            </Row>
        </Grid>
    )

```

## Support
This component it's planned to implement more features, stay tunned.

[1]: https://facebook.github.io/react/
[2]: https://www.omwdesign.eu