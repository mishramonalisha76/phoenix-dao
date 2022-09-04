export default [
    {
       "inputs": [],
       "stateMutability": "nonpayable",
       "type": "constructor"
    },
    {
       "inputs": [],
       "name": "notOwner",
       "type": "error"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "name": "collabList",
       "outputs": [
          {
             "internalType": "string",
             "name": "name",
             "type": "string"
          },
          {
             "internalType": "string",
             "name": "eventName",
             "type": "string"
          },
          {
             "internalType": "uint256",
             "name": "start",
             "type": "uint256"
          },
          {
             "internalType": "uint256",
             "name": "end",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "getCollabs",
       "outputs": [
          {
             "components": [
                {
                   "internalType": "string",
                   "name": "name",
                   "type": "string"
                },
                {
                   "internalType": "string",
                   "name": "eventName",
                   "type": "string"
                },
                {
                   "internalType": "uint256",
                   "name": "start",
                   "type": "uint256"
                },
                {
                   "internalType": "uint256",
                   "name": "end",
                   "type": "uint256"
                }
             ],
             "internalType": "struct AddColab.Collabs[]",
             "name": "",
             "type": "tuple[]"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "owner",
       "outputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "components": [
                {
                   "internalType": "string",
                   "name": "name",
                   "type": "string"
                },
                {
                   "internalType": "string",
                   "name": "eventName",
                   "type": "string"
                },
                {
                   "internalType": "uint256",
                   "name": "start",
                   "type": "uint256"
                },
                {
                   "internalType": "uint256",
                   "name": "end",
                   "type": "uint256"
                }
             ],
             "internalType": "struct AddColab.Collabs",
             "name": "details",
             "type": "tuple"
          }
       ],
       "name": "setColab",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    }
 ]