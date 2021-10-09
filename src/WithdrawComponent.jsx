import { useState } from 'react';
import './App.css';
import BoxTemplate from './BoxTemplate';

export default function WithdrawComponent( props ){

    const [amountOfShare, setAmountOfShare] = useState(0.0);
    const onChangeAmountOfShare = (e) => {
        setAmountOfShare(e.target.value);
    }
    const getMaxShare = () => {
        //ToDo;
    }

    const withdrawShare = () => {
        //ToDO;
    }
    return (
        <div class ="myStyle">
            <BoxTemplate 
                leftHeader = {"Amount:"} 
                right = {<div onClick = {() => getMaxShare()}>Max</div>} 
                value = {amountOfShare}
                onChange = {(e) => onChangeAmountOfShare(e)}
            />
            <div class ="myStyle3">
                <div class ="myButton" onClick = {() => withdrawShare()}>Withdraw</div>
            </div>
        </div>
        
    );
}