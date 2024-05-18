import type { Metadata } from 'next'
import { Exo, Orbitron } from "next/font/google"
import './globals.css'
import { Header, Socials, TermsPopup } from "@/components"
import ReduxProvider from "@/redux/Provider"
import ProviderWeb3Modal from './ProviderWeb3Modal'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'

import { config } from './Web3ModalConfig'
import { contract } from './ContractInteraction'
const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-orbitron"
})

const exo = Exo({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-exo"
})

export const metadata: Metadata = {
  title: 'Nebula Bridge',
  description: 'nebula website',
  keywords: ['nebula bridge', 'bridge nebula']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  // console.log("initWorm :",contract?.functions?.initWorm("0x1234567890abcdef1234567890abcdef12345678","0xabcdef1234567890abcdef1234567890abcdef12","0x7890abcdef1234567890abcdef1234567890abcd"));
  // console.log("_set_States_ :", contract?.functions?._set_States_(10, 0, true, 1000000000000000000, 1));

  return (
    <ReduxProvider>
      <html lang="en" className={`${orbitron.variable} ${exo.variable}`}>
        <body className={`main_bg transition-all font-exo duration-[1.5s] delay-300 md:bg-center bg-cover bg-no-repeat w-full`}>
          <ProviderWeb3Modal initialState={initialState}>
            <TermsPopup />

            <>
              <Header />
              {children}
              <Socials />
            </>
          </ProviderWeb3Modal>
        </body>
      </html>
    </ReduxProvider>
  )
}
