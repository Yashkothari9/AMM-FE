
export const PRECISION = 1000000;
export const RE = /^[0-9]*[.]?[0-9]*$/;
export const CONTRACT_ADDRESS = "0x1EE29B89d252723cfeA8a09491e1594A57Cb12e9";
export const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountToken1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountToken2",
				"type": "uint256"
			}
		],
		"name": "faucet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountToken1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountToken2",
				"type": "uint256"
			}
		],
		"name": "provide",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "share",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountToken1",
				"type": "uint256"
			}
		],
		"name": "swapToken1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken2",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountToken2",
				"type": "uint256"
			}
		],
		"name": "swapToken2",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken1",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_share",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountToken2",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountToken2",
				"type": "uint256"
			}
		],
		"name": "getEquivalentToken1Estimate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reqToken1",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountToken1",
				"type": "uint256"
			}
		],
		"name": "getEquivalentToken2Estimate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reqToken2",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyHoldings",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountToken2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "myShare",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPoolDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountToken1",
				"type": "uint256"
			}
		],
		"name": "getSwapToken1Estimate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken2",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountToken2",
				"type": "uint256"
			}
		],
		"name": "getSwapToken2Estimate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken1",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_share",
				"type": "uint256"
			}
		],
		"name": "getWithdrawEstimate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountToken2",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]