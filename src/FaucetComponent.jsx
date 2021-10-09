import { resolveProperties } from '@ethersproject/properties';
import { useState } from 'react';
import './App.css';
import BoxTemplate from './BoxTemplate';
import { PRECISION, RE } from './Constants';


export default function FaucetComponent( props ){
    const [amountOfKar, setAmountOfKar] = useState(0);
    const [amountOfKothi, setAmountOfKothi] = useState(0);

    const onChangeAmountOfKothi = (e) => {
        if( e.target.value === "" || RE.test(e.target.value) ) {   
            setAmountOfKothi(e.target.value);
        }
    }

    const onChangeAmountOfKar = (e) => {
        if( e.target.value === "" || RE.test(e.target.value) ) { 
            setAmountOfKar(e.target.value);
        }
    }

    async function onClickFund() {
        
        if( props.contract === null ) {
            alert("Connect to Metamask");
            return;
        }
        if( amountOfKothi !== '' && amountOfKar !== '' )
            await props.contract.faucet(amountOfKar * PRECISION, amountOfKothi * PRECISION);
        else 
            alert("Amount cannot be empty");

    }


    return (
        <div class ="myStyle">
            <BoxTemplate 
                leftHeader = {"Amount of KAR"} 
                right = {"KAR"} 
                value = {amountOfKar}
                onChange = {(e) => onChangeAmountOfKar(e)} 
            />
            <BoxTemplate 
                leftHeader = {"Amount of KOTHI"}  
                right = {"KOTHI"} 
                value = {amountOfKothi}
                onChange ={(e) => onChangeAmountOfKothi(e)}
            />
            <div class ="myStyle3">
                <div class ="myButton" onClick = {() => onClickFund()}>Fund</div>
            </div>
        </div>
    );
}