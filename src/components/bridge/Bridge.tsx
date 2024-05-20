"use client"
import { useState, useEffect } from 'react'
import { Networks, BridgeCard, TokenAssets } from "@/components"
import { routing } from "@/assets"
import Image from "next/image"
import { Wormhole, wormhole, amount, isTokenId, TokenTransfer } from '@wormhole-foundation/sdk';
import evm from '@wormhole-foundation/sdk/evm';
import solana from '@wormhole-foundation/sdk/solana';
import { contract } from '@/app/ContractInteraction'
import { useWalletInfo } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

const Bridge = () => {
  const { walletInfo } = useWalletInfo()
  const { address } = useAccount()

  const [showNetworks, setShowNetworks] = useState<boolean>(false);
  const [showAssets, setShowAssets] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

 

  useEffect(() => {
    handleTransfer()
  }, []);

  const handleTransfer = async () => {
    setLoading(true);
    setError(null);
    
    if (!Boolean(address)) {
      return  setLoading(false);
    }

    try {
      const wh = await wormhole("Testnet", [evm, solana]);

      const sendChain = wh.getChain("Avalanche");
      const rcvChain = wh.getChain("Solana");
console.log("rcvChain :",rcvChain);

      const token = Wormhole.tokenId(sendChain.chain, "native");
      const amt = "0.05";
      const automatic = true;
      const nativeGas = automatic ? "0.01" : undefined;
console.log("token :",token);

      // Dummy signers (Replace with actual implementation)

      const source = { address: "source_address", signer: {} };
      const destination = { address: "destination_address", signer: {} };

      const decimals = isTokenId(token)
        ? Number(await wh.getDecimals(token.chain, token.address))
        : sendChain.config.nativeTokenDecimals;

      const normalizedAmount = amount.units(amount.parse(1, decimals));
      const xfer = await tokenTransfer(wh, {
        rcvChain,
        token,
        amount: normalizedAmount,
        source,
        destination,
        delivery: {
          automatic,
          nativeGas: nativeGas ? amount.units(amount.parse(nativeGas, decimals)) : undefined,
        },
      });

      const receipt = await waitLog();
      // setResponse("ghjg");
    } catch (err) {
      // console.error(err);
      // setError('Failed to perform transfer');
    }
    setLoading(false);
  };

  async function tokenTransfer(wh: any, route: any) {
    const params = {
      targetChain: route.rcvChain.config.nativeChainId, 
      recipient: address ,  
      amt: route.amount,  
      token: route.token,  
      dstGas: 200000,  
      referal: address  
  };
  console.log("params :",params);
  
    const xfer = contract.functions.bridgeErc20(params)
    // const xfer = await wh.tokenTransfer(
    //   route.token,
    //   route.amount,
    //   route.source.address,
    //   route.destination.address,
    //   route.delivery.automatic,
    //   // route.payload,
    //   route.delivery.nativeGas
    // )
console.log("xfer :",xfer);


    // const quote = await TokenTransfer.quoteTransfer(
    //   wh,
    //   route.source.chain,
    //   route.destination.chain,
    //   xfer.transfer
    // );

    // if (xfer.transfer.automatic && quote.destinationToken.amount < 0) {
    //   throw "The amount requested is too low to cover the fee and any native gas requested.";
    // }

    // const srcTxids = await xfer.initiateTransfer(route.source.signer);
    // if (route.delivery.automatic) return xfer;

    // const attestIds = await xfer.fetchAttestation(60_000);
    // const destTxids = await xfer.completeTransfer(route.destination.signer);
    return xfer;
  }



  async function waitLog() {
    // Dummy wait logic (Replace with actual implementation)
    return new Promise((resolve) => setTimeout(() => resolve("transfer_receipt"), 1000));
  }


  return (
    <>
      <div className="lg:w-[38%] md:w-[65%] sm:w-[80%] w-[95%] mx-auto flex flex-col gap-[10px] items-center">
        <BridgeCard {... { extraStyles: "translate-y-[50px]", action: "from", to: false, showNetworks, showAssets, setNetwork: setShowNetworks, setAsset: setShowAssets }} />
        <Image src={routing} alt="routing icon" className="lg:w-[45px] lg:h-[45px] w-[35px] h-[35px] md:translate-y-[80px]  lg:translate-y-[70px] xs:translate-y-[35px] xl:translate-y-[90px] translate-y-[-8px]" />
        <BridgeCard {... { extraStyles: "xl:translate-y-[20px] xs:translate-y-0 translate-y-[-95px]", action: "To", to: true, showNetworks, showAssets, setNetwork: setShowNetworks, setAsset: setShowAssets }} />
      </div>

      {/* <Networks { ...{ showNetworks, setNetwork: setShowNetworks } } />   
       <TokenAssets  { ...{ showAssets, setAsset: setShowAssets } } />  */}
    </>
  )
}

export default Bridge