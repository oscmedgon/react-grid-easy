
![npm](https://img.shields.io/npm/dt/react-grid-easy?style=flat)
## react-lightweight-grid

A React grid layout system using css grid developed by [oscmedgon][2] to be used on [React][1] projects, it's easy to implement.

### Dependencies
The only real dependency it's a a React version 16.2 or newer.

> The grid structure helps developing a responsive site without tons of css.

The package doesn't use bootstrap, uses sass and css grid to create a really simple but effective grid.

## Installation
```$ npm i react-grid-easy```

## Component API

### Container
The Container component is the root for a new grid it has three main props


| Prop      	|  value type 	| Description                                 	|
|-----------	|-------------	|---------------------------------------------	|
| fluid     	| Boolean     	| Converts all the dependant grids in fluid*  	|
| className 	| string      	| A className for the container               	|
| children  	| React node  	| Content to be rendered inside the container 	|


* Only affects to direct child grids.

### Grid
The Grid component is where the grid system starts to work, important advice, **any** component direct child of a grid that it's not a Col component will use all the columns, for example, if you put a `<h3>` tag and a `<p>` both of them will take all the space, the grid onlu affects to the Col component.
    
    
| Prop      	|  value type       	| Description                                           	| Default value 	|
|-----------	|-------------------	|----------------------------------------------------------	|------------------	|
| className 	| string            	| A className for the container                         	| ```''```       	|
| children  	| React node        	| Content to be rendered inside the container           	| ```undefined```  	|
| revertMargin  | Boolean    	        | When true revers the margin assigned by the container 	| ```false```       |
| gap  	        | Number<sup>1</sup>    | Determines the gap between columns and rows           	| ```21```       	|
| divisions  	| Number/string        	| Number of divisions, by default 12 divisions in columns 	| ```12``` 	        |
| vertical  	| React node        	| Determine if the layout is horizontal or vertical     	| ```false```      	|

<sup>1</sup> Gap accepts different type of data:
1. Number: When you pass a number both column and vertical gaps are set to this value.
2. When you pass a number as a string like ```<Grid gap='20' />```  this number is parsed and managed as a number.
3. If you are running version 2.0.0 beta or above you will be able to assign a different gap for the column gap and for the row gap pasing an object with the following structure ```{row: 20, column: '50'}``` you can mix strings and numbers if you wish for the values
### Col
The Col component is a element inside the grid, with a series of props you can configure the size in the different screen sizes.

| Prop      	|  value type 	| Description                                 	       |
|-----------	|-------------	|----------------------------------------------------  |
| className 	| string      	| A className for the column               	           |
| children  	| String  	    | Content to be rendered inside the column 	           |
| xs  	        | String  	    | Size on a mobile screen up to 767px width            |
| sm  	        | String  	    | Size on a tablet screen up to 1023px width           |
| md  	        | String        | Size on a medium screen up to 1365px width           |
| lg  	        | String  	    | Size on a big screen                                 |
| xsOffset  	| String      	| Empty space size before the column on mobile screen  |
| smOffset  	| String      	| Empty space size before the column on tablet screen  |
| mdOffset  	| String  	    | Empty space size before the column on medium screen  |
| lgOffset  	| String      	| Empty space size before the column on large screen   |

**IMPORTANT note**
If you pass 0 in a screen size the column will not show in that screen size.
If you dont pass any value to a specific screen size the component will try to take the previous screen size value, and if there isn't any assigned value it will take the higest possible value, in a 12 columns gid will take 12 columns.
For example
```javascript
<Grid>
    <Col sm='6' lg='3'>
        /* Your code here*/
    </Col>
    <Col>
        /* Your code here*/
    </Col>
    <Col xs='0' md='6' lg='3'>
        /* Your code here*/
    </Col>
</Grid>
```
This code is the same as using this
```javascript
<Grid>
    <Col xs='12' sm='6' md='6' lg='3'>
        /* Your code here*/
    </Col>
    <Col xs='12' sm='12' md='12' lg='12'>
        /* Your code here*/
    </Col>
    <Col xs='0' sm='0' md='6' lg='3'>
        /* Your code here*/
    </Col>
</Grid>
```

### Row
The Row its a component to create subgrids inside an element, no matter the nesting position of the component.

| Prop      	|  value type 	| Description                                 	|
|-----------	|-------------	|---------------------------------------------	|
| revertMargin  | Boolean     	| Revert the default margins of the grid    	|
| className 	| string      	| A className for the container               	|
| children  	| React node  	| Content to be rendered inside the container 	|


## Usage
```javascript
    import React from 'React'
    import {Component, Grid, Col, Row} from 'react-lightweight-grid';
    const gridTest = () => (
        <Component>
            <Grid gap={{column: 20, row: 15}}>
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
