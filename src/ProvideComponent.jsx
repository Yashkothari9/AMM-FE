import { MdAdd} from 'react-icons/md';
import { useState } from 'react';
import './App.css';
import BoxTemplate from './BoxTemplate';

export default function ProvideComponent( props ){
    const [amountOfKar, setAmountOfKar] = useState(0);
    const [amountOfKothi, setAmountOfKothi] = useState(0);
    const onChangeAmountOfKar = (e) => {
        setAmountOfKar(e.target.value);
    }
    const onChangeAmountOfKothi = (e) => {
        setAmountOfKothi(e.target.value);
    }

    const provide= () => {
        //ToDo: Call Blockchain
    }
    return (
        <div class ="myStyle">
            <BoxTemplate 
                leftHeader = {"Amount of KAR"}
                value = {amountOfKar}
                onChange = {(e) => onChangeAmountOfKar(e)}
            />
                <div class ="reverseCoin">
                    <MdAdd />
                </div>
            <BoxTemplate 
                leftHeader = {"Amount of KOTHI"}
                value = {amountOfKothi}
                onChange = {(e) => onChangeAmountOfKothi(e)}
            />
            <div class ="myStyle3">
                <div class ="myButton" onClick = {() => provide()}>Provide</div>
            </div>
        </div>
    );
}