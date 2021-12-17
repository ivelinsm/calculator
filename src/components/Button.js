import React from 'react'

const Button = (props) => {
    return (
        <button 
            onClick={props.onBtnClick} 
            type="button" 
            value={props.value}
            id={props.id}
            className={props.className}>
                {props.value}
            </button>
    )
}

export default Button