"use client"
import { useState, useEffect } from 'react'
import { ConnectProps } from "@/types"
import type { RootState, AppDispatch } from '@/redux/store/store'
import { connectWallet, disconnectWallet } from "@/redux/services/walletSlice"
// redux hooks
import { useSelector, useDispatch } from 'react-redux'
import useNetwork from "@/custom-hooks/useNetwork"
import { useWalletInfo, useWeb3Modal } from '@web3modal/wagmi/react'
import { useDisconnect } from 'wagmi'

const ConnectButton = ({ styles }: ConnectProps) => {
  const isConnected = useNetwork()
  const walletState = useSelector((state: RootState) => state.wallet)
  const { walletInfo } = useWalletInfo()
  const { disconnect } = useDisconnect()
  const [connectionState, setConnectionState] = useState("not-connected");
  const dispatch = useDispatch<AppDispatch>();
  const { open } = useWeb3Modal()

  const connectingWallet = async () => {    
    try {
      if (!Boolean(walletInfo)) {
        open()
         const userWallet = await dispatch(connectWallet("wallet_switchEthereumChain")) 
         localStorage.setItem("user-wallet", JSON.stringify({ connected: true, wallet: userWallet.payload as string }) );  
        //  console.log(walletState.user)
        //  window.location.reload();
         setConnectionState("connected")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const disconnectingWallet = async () => {
    if (Boolean(walletInfo)) {      
      disconnect()
      await dispatch(disconnectWallet("wallet_revokePermissions"))
      localStorage.removeItem("user-wallet")
      // window.location.reload();
    }
  }

  return (

    // ${!isConnected ? "opacity-[1] visible translate-y-[0px]" : "opacity-[0] invisible translate-y-[-100px]"}
    <button
      onClick={!Boolean(walletInfo) ? connectingWallet : disconnectingWallet}
      className={` ${styles} border-[1px] border-[#D2ECFF] transition-all duration-[0.7s] delay-200 rounded-br-[20px] rounded-tl-[20px] whitespace-nowrap bg-no-repeat bg-contain font-medium outline-none py-[4px] px-[12px]`}>
      {Boolean(walletInfo) ? "Disconnect" : "Connect Wallet"}
    </button>
  )
}

export default ConnectButton