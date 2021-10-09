import { ethers } from "ethers";
import { abi, CONTRACT_ADDRESS } from "./Constants";
import Container from './Container';
import { useState } from "react";
import './App.css';


function App() {
	const [myContract, setMyContract] = useState(null);
	
	let provider, signer; 
	async function connect() {
		let res = await connectToMetamask();
		if( res === true ) {
			provider = new ethers.providers.Web3Provider(window.ethereum);
			signer = provider.getSigner();
			try {
				const contract = new ethers.Contract(
					CONTRACT_ADDRESS,
					abi,
					signer,
				);
				setMyContract(contract);
				console.log("---------contract", contract);
			} catch (err) {
				alert("CONTRACT_ADDRESS not set properly");
			}
		} else {
			alert("Couldn't connect to Metamask");
		}
	}
  	
	async function connectToMetamask() {
		try {
		  	await window.ethereum.enable();
		  	return true;
		} catch (err) {
		  	return false;
		}
	}

	return (
    	<div>
			<div className = "navBar"> 
       			<h1  style={{textAlign: "center"}}> AMM </h1>
				{	myContract === null ?
			   		<div className = "connectBtn myButton" onClick = {() => connect()}>Connect to metamask</div>
					:
					<div className = "connectBtn">Connected</div>
				}
			</div>
			<Container 
			   	contract = {myContract}
				connect = {() => connect()}
			/>
    	</div>
  	);
}

export default App;
