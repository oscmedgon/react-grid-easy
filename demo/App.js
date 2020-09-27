import {Container, Grid, Col, Row} from '../lib'

export default function App() {
    const [state, setState] = React.useState({
        elements: 10,
        fluid: true,
        revertMargin: false,
        gap: 21,
        vertical: false,
        divisions: 12
    })

    function handleChangeInput({target: {value, id}}) {
        setState({
            ...state,
            [id]: +value
        })
    }

    function handleChangeCheckbox({target: {checked, id}}) {
        setState({
            ...state,
            [id]: checked
        })
    };

    const {elements, fluid, revertMargin, gap, vertical, divisions} = state;
    return (
        <div>
            <div
                style={{
                    padding: 40
                }}
            >
                <div
                style={{
                    margin: '10px 0'
                }}
                >
                    <label htmlFor='elements'>Number of columns: </label>
                    <input type='number' id='elements' value={elements} onChange={handleChangeInput}/>
                </div>
                <div
                style={{
                    margin: '10px 0'
                }}
                >
                    <label htmlFor='gap'>Grid and rows gap: </label>
                    <input type='number' id='gap' value={gap} onChange={handleChangeInput}/>
                </div>
                <div
                    style={{
                        margin: '10px 0'
                    }}
                >
                    <label htmlFor='divisions'>Grid divisions: </label>
                    <input
                        min='1'
                        max='20'
                        type='number'
                        id='divisions'
                        value={divisions}
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <input type='checkbox' id='fluid' onChange={handleChangeCheckbox} checked={fluid} />
                    <label htmlFor='fluid'>Container fluid </label>
                    <input type='checkbox' id='revertMargin' onChange={handleChangeCheckbox} checked={revertMargin} />
                    <label htmlFor='revertMargin'>Revert margin </label>
                    <input type='checkbox' id='vertical' onChange={handleChangeCheckbox} checked={vertical} />
                    <label htmlFor='vertical'>Vertical grid </label>
                </div>
            </div>
            <Container fluid={fluid}>
                <Grid revertMargin={revertMargin} gap={{row: gap, column: 30}} divisions={divisions} vertical={vertical}>
                    {Array(elements).fill('').map((e, i) => <Column index={i} gap={gap} />)}
                </Grid>
            </Container>
        </div>
    )
}

function Column({
    gap,
    index
}) {
    const [state, setState] = React.useState({
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
    })

    function handleToggleRow() {
        setState({
            ...state,
            row: !state.row

        })
    }

    function handleChangeSizes({target: {id, value}}) {
        setState({
            ...state,
            sizes: {
                ...state.sizes,
                [id]: value >= 0 ? value : undefined,
            }
        })
    }

    const {sizes, row} = state;
    return (
        <Col {...sizes} style={{backgroundColor: index % 2 === 0 ? 'lightgrey' : '#fafafa', padding: 40, position: 'relative'}} data-pepe={true}>
            <span
                onClick={handleToggleRow}
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
                <Row gap={props.gap} style={{backgroundColor: 'purple', color: 'white', padding: 10}}>
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
                            <input min='-1' max='12' type='number' value={sizes[e] || '-1'} id={e} onChange={handleChangeSizes} />
                            <label htmlFor={e}>Size {e}</label>
                        </div>
                    ))}
                </div>
            }
        </Col>
    )
}
