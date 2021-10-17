import { MdAdd} from 'react-icons/md';
import { useState } from 'react';
import './Styles.css';
import BoxTemplate from './BoxTemplate';
import { PRECISION } from './Constants';

export default function ProvideComponent( props ) {
    
    const [amountOfKar, setAmountOfKar] = useState(0);
    const [amountOfKothi, setAmountOfKothi] = useState(0);
    const [error, setError] = useState("");

    const getProvideEstimate = async (token, value) => {
        
        if (['','.'].includes(value))  return;
        if (props.contract !== null) {
            try {
                let estimate;
                if (token === "KAR") {
                    estimate = await props.contract.getEquivalentToken2Estimate(value * PRECISION);
                    setAmountOfKothi(estimate / PRECISION);
                } else {
                    estimate = await props.contract.getEquivalentToken1Estimate(value * PRECISION);
                    setAmountOfKar(estimate / PRECISION);
                }
            } catch (err) {
                if (err.data.message === "execution reverted: Zero Liquidity") {
                    setError("Message: Zero liquidity");
                } else {
                    alert(err?.data?.message);
                }
            }
        }   
    }

    const onChangeAmountOfKar = (e) => {
        setAmountOfKar(e.target.value);
        getProvideEstimate("KAR", e.target.value);
    }

    const onChangeAmountOfKothi = (e) => {
        setAmountOfKothi(e.target.value);
        getProvideEstimate("KOTHI", e.target.value);
    }

    const provide = async () => {
        if (['','.'].includes(amountOfKar) || ['', '.'].includes(amountOfKothi)) {
            alert("Amount should be a valid number");
            return;
        }
        if (props.contract === null) {
            alert("Connect to Metamask");
            return;
        } else {
            try {
                let response  = await props.contract.provide(amountOfKar * PRECISION, amountOfKothi * PRECISION);
                await response.wait();
                setAmountOfKar(0);
                setAmountOfKothi(0);
                await props.getHoldings();
                alert("Success");
            } catch (err) {
                err &&
                alert(err?.data?.message);
            }
        }
    }

    return (
        <div className ="tabBody">
            <BoxTemplate 
                leftHeader = {"Amount of KAR"}
                value = {amountOfKar}
                onChange = {(e) => onChangeAmountOfKar(e)}
            />
                <div className ="swapIcon">
                    <MdAdd />
                </div>
            <BoxTemplate 
                leftHeader = {"Amount of KOTHI"}
                value = {amountOfKothi}
                onChange = {(e) => onChangeAmountOfKothi(e)}
            />
            <div className = "error">
                {error}
            </div>
            <div className ="bottomDiv">
                <div className ="btn" onClick = {() => provide()}>Provide</div>
            </div>
        </div>
    );
}