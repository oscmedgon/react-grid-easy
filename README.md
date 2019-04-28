## react-lightweight-grid

A React grid layout system using css grid developed by [oscmedgon][2] to be used on [React][1] projects, it's easy to implement.

### Dependencies
The only real dependencie it's a a React version 16.2 or newer.

> The grid structure helps developing a responsive site without tons of css.

The package doesn't use bootstrap, uses sass and css grid to creare a really simple but effective grid.

## Installation

```$ npm i react-lightweight-grid```

## Components API

### Container
The Container component is the root for a new grid it has three main props


| Prop      	|  value type 	| Description                                 	|
|-----------	|-------------	|---------------------------------------------	|
| fluid     	| Boolean     	| Converts all the dependant grids in fluid*  	|
| className 	| string      	| A className for the container               	|
| children  	| React node  	| Content to be rendered inside the container 	|


* Only affects to direct child grids.

### Grid
The Grid component is where the grid system starts to work, important advice, *any* component direct child of a grid that it's not a Col component will use all the columns, for example, if you put a <h3> tag and a <p> both of them will take all the space, the grid onlu affects to the Col component.
    
| Prop      	|  value type 	| Description                                 	|
|-----------	|-------------	|---------------------------------------------	|
| className 	| string      	| A className for the container               	|
| children  	| React node  	| Content to be rendered inside the container 	|

    
### Col
The Col component is a element inside the grid, with a series of props you can configure the size in the different screen sizes.

| Prop      	|  value type 	| Description                                 	|
|-----------	|-------------	|---------------------------------------------	|
| className 	| string      	| A className for the column               	    |
| children  	| String  	    | Content to be rendered inside the column 	    |
| xs  	        | String  	    | Size on a mobile screen up to 767px width     |
| sm  	        | String  	    | Size on a tablet screen up to 1023px width    |
| md  	        | String        | Size on a medium screen up to 1365px width    |
| lg  	        | String  	    | Size on a big screen                          |
| xsOffset  	| String      	| Determines the empty space before the column  |
| smOffset  	| String      	| Determines the empty space before the column  |
| mdOffset  	| String  	    | Determines the empty space before the column  |
| lgOffset  	| String      	| Determines the empty space before the column  |

**IMPORTANT note**
If you dont pass 0 in a a screen size the column will not show.
## Usage
```javascript
    import React from 'React'
    import {Component, Grid, Col, Row} from 'react-lightweight-grid';
    const gridTest = () => (
        <Component>
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
        </Component>
    )

```

## Support
This component it's planned to implement more features, stay tunned.

[1]: https://facebook.github.io/react/
[2]: https://www.omwdesign.eu
