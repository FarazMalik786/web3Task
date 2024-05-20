"use client"
import { useEffect, useState } from 'react'
import Image from "next/image"
import { metamaskIcon } from '@/assets'
import type { RootState, AppDispatch } from "@/redux/store/store"
import { useSelector, useDispatch } from "react-redux"
import { getNetworkData } from "@/helpers"
import { useWalletInfo } from '@web3modal/wagmi/react'

const Connected = () => {
  const walletState = useSelector((state: RootState) => state.wallet)
  const [userWallet, setUserWallet] = useState<string>('');
  const { walletInfo } = useWalletInfo()

  useEffect(() => {
    const userData = getNetworkData()
    if (userData) {
      setUserWallet(userData.wallet)
    }
  }, [userWallet])


  return (
    <div className="flex min-w-[150px] items-center justify-center gap-[5px] border-[1.5px] border-[#D2ECFF] rounded-[20px] py-[4px] px-[14px]">
      {Boolean(walletInfo) ?
        <img src={walletInfo?.icon} className="w-[20px] h-[20px]" />
        :
        <Image src={metamaskIcon} alt="metamask icon" className="w-[20px] h-[20px]" />
      }

      <p className="font-medium lg:text-[16px]"> {Boolean(walletInfo) && `${walletInfo?.name}` || "Guest"} </p>
    </div>
  )
}

export default Connected