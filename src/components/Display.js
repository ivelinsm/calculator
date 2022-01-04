import React from 'react'

const Display = (props) => {
    return (
    <div id="display">
        <h1 id="result">{props.result}</h1>
        <h1 id="input">{props.currentValue}</h1>
    </div>)
}

export default Display