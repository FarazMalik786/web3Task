import "@ethersproject/shims"
import { Signer, ethers } from "ethers";
import { contractABI } from "../ContractAbi"
import { useEffect } from "react";

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/e858b74c320d4647bbbf4f0834af79e6")
const contractAddress = '0xeFbc4C8c06EbC93B6db7D06E2B9b5A2038f6a9Af';
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer)




export { contract }