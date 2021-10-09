import { useEffect, useState } from 'react';
import './App.css';
import SwapComponent from './SwapComponent';
import ProvideComponent from './ProvideComponent';
import WithdrawComponent from './WithdrawComponent';
import FaucetComponent from './FaucetComponent';
import { PRECISION } from './Constants';

export default function Container(props) {

    const [activeTab, setActiveTab] = useState("Swap");
    const [amountOfKAR, setAmountOfKAR] = useState(0);
    const [amountOfKOTHI, setAmountOfKOTHI] = useState(0);

    console.log("Contract in Container", props.contract);
    
    async function getHoldings() {
        try {
            let response = await props.contract.getMyHoldings();
            setAmountOfKAR(parseFloat(response.amountToken1) / PRECISION);
            setAmountOfKOTHI(parseFloat(response.amountToken2) / PRECISION);
            console.log("---Holdings", parseInt(response.amountToken1));
        } catch (err) {
            console.log("Couldn't Fetch holdings", err);
        }
    }

    getHoldings();

    const changeTab = (tab) => {
        setActiveTab(tab);
    }
    return (
        <div className = "centerBody">
            <div className = "centerContainer">
                <div className="boxStyle3">
                    <div class ={"tabStyle " + (activeTab === "Swap" ? "activeTab" : "")} onClick = {() => changeTab("Swap")}>Swap</div>
                    <div class ={"tabStyle " + (activeTab === "Provide" ? "activeTab" : "")} onClick = {() => changeTab("Provide")}>Provide</div>
                    <div class ={"tabStyle " + (activeTab === "Withdraw" ? "activeTab" : "")}onClick = {() => changeTab("Withdraw")}>Withdraw</div>
                    <div class ={"tabStyle " + (activeTab === "Faucet" ? "activeTab" : "")}onClick = {() => changeTab("Faucet")}>Faucet</div>
                </div>

                { activeTab === "Swap" && <SwapComponent contract = {props.contract} connect = {() => props.connect()} getHoldings = {() => getHoldings()}/>}
                { activeTab === "Provide" && <ProvideComponent contract = {props.contract} connect = {() => props.connect()} getHoldings = {() => getHoldings()}/>}
                { activeTab === "Withdraw" && <WithdrawComponent contract = {props.contract} connect = {() => props.connect()} getHoldings = {() => getHoldings()}/>}
                { activeTab === "Faucet" && <FaucetComponent contract = {props.contract} connect = {() => props.connect()} getHoldings = {() => getHoldings()}/>}
            </div>
            <div className = "details">
                Amount of KAR: {amountOfKAR}
                <br/>
                Amount of KOTHI: {amountOfKOTHI}
                <br/>
            </div>
        </div>
    );
  }
  