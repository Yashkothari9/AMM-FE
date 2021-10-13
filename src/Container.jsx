import { useState } from 'react';
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
    const [amountOfShare, setAmountOfShare] = useState(0);

    async function getHoldings() {
        try {
            let response = await props.contract.getMyHoldings();
            setAmountOfKAR(parseFloat(response.amountToken1) / PRECISION);
            setAmountOfKOTHI(parseFloat(response.amountToken2) / PRECISION);
            setAmountOfShare(parseFloat(response.myShare) / PRECISION);
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
                <div className="selectTab">
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
                <div className = "detailsBody">
                    <div className = "detailsHeader">
                        Details
                    </div>
                    <div className = "detailsRow">
                        <div className = "detailsAttribute">Amount of KAR:</div>
                        <div className = "detailsValue">{amountOfKAR}</div>
                    </div>
                    <div className = "detailsRow">
                        <div className = "detailsAttribute">Amount of KOTHI:</div>
                        <div className = "detailsValue">{amountOfKOTHI}</div>
                    </div>
                    <div className = "detailsRow">
                        <div className = "detailsAttribute">Your Share:</div>
                        <div className = "detailsValue">{amountOfShare}</div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  