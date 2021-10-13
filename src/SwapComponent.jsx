import { useState } from 'react';
import { MdSwapVert } from "react-icons/md";
import './App.css';
import BoxTemplate from './BoxTemplate';
import { PRECISION } from './Constants';

export default function SwapComponent( props ){
    const [coin, setCoin] = useState(["KAR", "KOTHI"]);
    const [amountFrom, setAmountFrom] = useState(0.0);
    const [amountTo, setAmountTo] = useState(0.0);
    
    const rev = () => {
        setCoin([...( coin.reverse() )]);
    }
    
    const getSwapEstimate = async ( setValue, val ) => {
        if ( props.contract !== null ) {
            if ( coin[0] === "KAR" ) {
                try {
                    let estimateOfAmountTo = await props.contract.getSwapToken1Estimate( val.target.value * PRECISION );
                    setValue( estimateOfAmountTo / PRECISION );
                } catch (err) {
                    alert(err.data.message);
                    console.log(err.data.message);
                }

            } else {
                try {
                    let estimateOfAmountTo = await props.contract.getSwapToken2Estimate( val.target.value * PRECISION );
                    setValue( estimateOfAmountTo / PRECISION );

                } catch (err) {
                    alert(err.data.message);
                }
            }
        }
    }

    const onChangeAmtFrm = (val) => {
        setAmountFrom(val.target.value);
        getSwapEstimate(setAmountTo, val);
    }
    
    const onChangeAmtTo = (val) => {
        setAmountTo(val.target.value);
        getSwapEstimate(setAmountFrom, val);
    }

    const onSwap = async () => {
        if (props.contract === null) {
            alert("Connect to Metamask");
            return;
        } else {
            try {
                let response;
                if (coin[0] === "KAR") {
                    response = await props.contract.swapToken1(amountFrom);
                } else { 
                    response = await props.contract.swapToken2(amountFrom);
                }
                setAmountFrom(0);
                setAmountTo(0);
                console.log(response);
            } catch (err) {
                alert(err.data.message);
            }
        }   
    }
    return (
        <div class ="tabBody">
            <BoxTemplate 
                leftHeader = {"From"} 
                right = {coin[0]}
                value = {amountFrom} 
                onChange = {(e) => onChangeAmtFrm(e)}
            />
            <div class ="swapIcon" onClick={() => rev()}>
                    <MdSwapVert />
            </div>
            <BoxTemplate 
                leftHeader = {"To"} 
                right = {coin[1]}
                value = {amountTo} 
                onChange = {(e) => onChangeAmtTo(e)}
            />
            <div class ="myStyle3">
                <div class ="btn" onClick = {() => onSwap()}>Swap</div>
            </div>
        </div>
    );
}