export const contractABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_layerZroEndPoint",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_grayzone",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "DEFAULT_PAYLOAD_SIZE_LIMIT",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "LatestBridges",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "isEth",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "ethbridge",
                "type": "tuple",
                "internalType": "struct Structs.EthBridge",
                "components": [
                    {
                        "name": "_lzSrcCh",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "_lzDstChId",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "dstReciver",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "timeStamp",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "delivered",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            },
            {
                "name": "tokenbridge",
                "type": "tuple",
                "internalType": "struct Structs.TokenBridge",
                "components": [
                    {
                        "name": "_wormSrcCh",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "_wormDstChId",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "token",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "dstReciver",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "timeStamp",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "delivered",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "_distrustAddress",
        "inputs": [
            {
                "name": "chainId",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "_removeWormholeEndpoint",
        "inputs": [
            {
                "name": "wormholeId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "contractAddress",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "_setWormholeEndpoint",
        "inputs": [
            {
                "name": "wormholeId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "contractAddress",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "_set_States_",
        "inputs": [
            {
                "name": "pointPerTx",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "totalPoints",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "isActive",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "bridgeFeeEther",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "percentFee",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "_trustAddress",
        "inputs": [
            {
                "name": "remoteAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "chainId",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "bridgeErc20",
        "inputs": [
            {
                "name": "params",
                "type": "tuple",
                "internalType": "struct Inputs.ERC20INPUT",
                "components": [
                    {
                        "name": "targetChain",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "recipient",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amt",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "token",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "dstGas",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "referal",
                        "type": "address",
                        "internalType": "address"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "name": "z",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "bridgeEth",
        "inputs": [
            {
                "name": "params",
                "type": "tuple",
                "internalType": "struct Inputs.ETHINPUT",
                "components": [
                    {
                        "name": "toChainId",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "to",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amt",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "dstGas",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "useZro",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "zroPAddr",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "referal",
                        "type": "address",
                        "internalType": "address"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "failedMessages",
        "inputs": [
            {
                "name": "",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "forceResumeReceive",
        "inputs": [
            {
                "name": "_srcChainId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_srcAddress",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getAccruedFee",
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getConfig",
        "inputs": [
            {
                "name": "_version",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_chainId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_configType",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getErc20Cost",
        "inputs": [
            {
                "name": "wormholeId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "gasUnits",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getEthBridge",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "Nonce",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "LzChain",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "inOrOut",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Structs.EthBridge",
                "components": [
                    {
                        "name": "_lzSrcCh",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "_lzDstChId",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "dstReciver",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "timeStamp",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "delivered",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getEthCost",
        "inputs": [
            {
                "name": "_dstLzId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_useZro",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "sendTo",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "gasUnits",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "cost",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getStates",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Structs.BridgeData",
                "components": [
                    {
                        "name": "pointPerTx",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "totalPoints",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "isActive",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "bridgeFeeEther",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "percentFee",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getTKNBridgeIn",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "deliveryHash",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Structs.TokenBridge",
                "components": [
                    {
                        "name": "_wormSrcCh",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "_wormDstChId",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "token",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "dstReciver",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "timeStamp",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "delivered",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getTKNBridgeOut",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "outNonce",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "toWormChain",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Structs.TokenBridge",
                "components": [
                    {
                        "name": "_wormSrcCh",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "_wormDstChId",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "token",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "dstReciver",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "timeStamp",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "delivered",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getTKNDelivHash",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "bridgeInNonce",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "frmWormChain",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getTrustedRemoteAddress",
        "inputs": [
            {
                "name": "_remoteChainId",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserData",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Structs.UserData",
                "components": [
                    {
                        "name": "ethBridgeOut",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "ethBridgeIn",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "tokenBridgeOut",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "tokenBridgeIn",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "totalRef",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "points",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            },
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Structs.Referals",
                "components": [
                    {
                        "name": "refered",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "referer",
                        "type": "address",
                        "internalType": "address"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserEthVol",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "toLzChain",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserTknVol",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "toWormId",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "initWorm",
        "inputs": [
            {
                "name": "_wormholeRelayer",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_wormholeTokenBridge",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_wormholeCore",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "isTrustedRemote",
        "inputs": [
            {
                "name": "_srcChainId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_srcAddress",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "lzEndpoint",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract ILayerZeroEndpoint"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "lzReceive",
        "inputs": [
            {
                "name": "_srcChainId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_srcAddress",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "_nonce",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "_payload",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "minDstGasLookup",
        "inputs": [
            {
                "name": "",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "nonblockingLzReceive",
        "inputs": [
            {
                "name": "_srcChainId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_srcAddress",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "_nonce",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "_payload",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "payloadSizeLimitLookup",
        "inputs": [
            {
                "name": "",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "precrime",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "receiveWormholeMessages",
        "inputs": [
            {
                "name": "payload",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "additionalVaas",
                "type": "bytes[]",
                "internalType": "bytes[]"
            },
            {
                "name": "sourceAddress",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "sourceChain",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "deliveryHash",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "retryMessage",
        "inputs": [
            {
                "name": "_srcChainId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_srcAddress",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "_nonce",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "_payload",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "setConfig",
        "inputs": [
            {
                "name": "_version",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_chainId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_configType",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_config",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setGrayzoneAddr",
        "inputs": [
            {
                "name": "addr",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "num",
                "type": "uint8",
                "internalType": "uint8"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setMinDstGas",
        "inputs": [
            {
                "name": "_dstChainId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_packetType",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_minGas",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setPayloadSizeLimit",
        "inputs": [
            {
                "name": "_dstChainId",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "_size",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setPrecrime",
        "inputs": [
            {
                "name": "_precrime",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setReceiveVersion",
        "inputs": [
            {
                "name": "_version",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setRegisteredSender",
        "inputs": [
            {
                "name": "sourceChain",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "sourceAddress",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setSendVersion",
        "inputs": [
            {
                "name": "_version",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "tBridgeIndex",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "tokenBridge",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract ITokenBridge"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "trustedRemoteLookup",
        "inputs": [
            {
                "name": "",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "withdrawAccruedFee",
        "inputs": [
            {
                "name": "token",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "withdrawAccruedFeeEth",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "withdrawFee",
        "inputs": [
            {
                "name": "amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "wormhole",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IWormhole"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "wormholeRelayer",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IWormholeRelayer"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "MessageFailed",
        "inputs": [
            {
                "name": "_srcChainId",
                "type": "uint16",
                "indexed": false,
                "internalType": "uint16"
            },
            {
                "name": "_srcAddress",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            },
            {
                "name": "_nonce",
                "type": "uint64",
                "indexed": false,
                "internalType": "uint64"
            },
            {
                "name": "_payload",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            },
            {
                "name": "_reason",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RetryMessageSuccess",
        "inputs": [
            {
                "name": "_srcChainId",
                "type": "uint16",
                "indexed": false,
                "internalType": "uint16"
            },
            {
                "name": "_srcAddress",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            },
            {
                "name": "_nonce",
                "type": "uint64",
                "indexed": false,
                "internalType": "uint64"
            },
            {
                "name": "_payloadHash",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "SetMinDstGas",
        "inputs": [
            {
                "name": "_dstChainId",
                "type": "uint16",
                "indexed": false,
                "internalType": "uint16"
            },
            {
                "name": "_type",
                "type": "uint16",
                "indexed": false,
                "internalType": "uint16"
            },
            {
                "name": "_minDstGas",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "SetPrecrime",
        "inputs": [
            {
                "name": "precrime",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "SetTrustedRemote",
        "inputs": [
            {
                "name": "_remoteChainId",
                "type": "uint16",
                "indexed": false,
                "internalType": "uint16"
            },
            {
                "name": "_path",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "SetTrustedRemoteAddress",
        "inputs": [
            {
                "name": "_remoteChainId",
                "type": "uint16",
                "indexed": false,
                "internalType": "uint16"
            },
            {
                "name": "_remoteAddress",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "NotAnEvmAddress",
        "inputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "WrongFeeOrParams",
        "inputs": []
    }
] 