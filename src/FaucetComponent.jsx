import { useState } from 'react';
import './App.css';
import BoxTemplate from './BoxTemplate';
import { PRECISION } from './Constants';


export default function FaucetComponent( props ){
    const [amountOfKar, setAmountOfKar] = useState(0);
    const [amountOfKothi, setAmountOfKothi] = useState(0);

    const onChangeAmountOfKothi = (e) => {   
        setAmountOfKothi(e.target.value);
    }

    const onChangeAmountOfKar = (e) => {
            setAmountOfKar(e.target.value);
    }

    async function onClickFund() {
        console.log("fund");
        if( props.contract === null ) {
            alert("Connect to Metamask");
            return;
        }
        if( amountOfKothi !== '' && amountOfKar !== '' ) {
            try {
                await props.contract.faucet(amountOfKar * PRECISION, amountOfKothi * PRECISION);   
                setAmountOfKar(0);
                setAmountOfKothi(0);
                alert("Success"); 
            } catch (err) {
                err?.data?.message && 
                alert(err?.data?.message);
                console.log(err);
            }
        } else { 
            alert("Amount cannot be empty");
        }

    }


    return (
        <div class ="tabBody">
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
                <div class ="btn" onClick = {() => onClickFund()}>Fund</div>
            </div>
        </div>
    );
}