import { useState } from 'react';
import { MdSwapVert } from "react-icons/md";
import './App.css';
import BoxTemplate from './BoxTemplate';

export default function SwapComponent( props ){
    const [coin, setCoin] = useState(["KAR", "KOTHI"]);
    const [amountFrom, setAmountFrom] = useState(0.0);
    const [amountTo, setAmountTo] = useState(0.0);
    const rev = () => {
        setCoin([...(coin.reverse())]);
    }
    const onChangeAmtFrm = (val) => {
        setAmountFrom(val.target.value);
        //To do: swap rate
    }
    const onChangeAmtTo = (val) => {
        setAmountTo(val.target.value);
        //To do: swap rate
    }

    const onSwap = () => {
        //To do: Intract with blockchain
    }
    return (
        <div class ="myStyle">
            <BoxTemplate 
                leftHeader = {"From"} 
                right = {coin[0]}
                value = {amountFrom} 
                onChange = {(e) => onChangeAmtFrm(e)}
            />
            <div class ="reverseCoin" onClick={() => rev()}>
                    <MdSwapVert />
            </div>
            <BoxTemplate 
                leftHeader = {"To"} 
                right = {coin[1]}
                value = {amountTo} 
                onChange = {(e) => onChangeAmtTo(e)}
            />
            <div class ="myStyle3">
                <div class ="myButton" onClick = {() => onSwap()}>Swap</div>
            </div>
        </div>
    );
}