import { subtract } from 'mathjs';
import React from 'react'
import Button from './Button'
const Buttons = (props) => {
    const operators = ['x', '/', '-', '+', '=', 'AC', '.', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operatorsIds = ['multiply', 'divide', 'subtract', 'add', 'equals', 'clear', 'decimal', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    const renderButtons = () => {
        return (operators.map(e => {
            return (
            <Button 
                value={e} 
                onBtnClick={props.onBtnClick} 
                id={operatorsIds[operators.indexOf(e)]}
                className={((Number(e)=== e) ? 'numberButton' : 'operationButton')}
            />)
        }));
    }
    return (
    <form className="buttons">
        {renderButtons()}
    </form>
    )
}

export default Buttons

/*
<Button value='AC'onBtnClick={props.onBtnClick}/>
        <Button value='/' onBtnClick={props.onBtnClick}/>
        <Button value='x' onBtnClick={props.onBtnClick}/>
        
        <Button value='7' onBtnClick={props.onBtnClick}/>
        <Button value='8' onBtnClick={props.onBtnClick}/>
        <Button value='9' onBtnClick={props.onBtnClick}/>
        <Button value='-' onBtnClick={props.onBtnClick}/>

        <Button value='4' onBtnClick={props.onBtnClick}/>
        <Button value='5' onBtnClick={props.onBtnClick}/>
        <Button value='6' onBtnClick={props.onBtnClick}/>
        <Button value='+' onBtnClick={props.onBtnClick}/>

        <Button value='1' onBtnClick={props.onBtnClick}/>
        <Button value='2' onBtnClick={props.onBtnClick}/>
        <Button value='3' onBtnClick={props.onBtnClick}/>
        <Button value='=' onBtnClick={props.onBtnClick}/>

        <Button value='0' onBtnClick={props.onBtnClick}/>
        <Button value='.' onBtnClick={props.onBtnClick}/>
        */