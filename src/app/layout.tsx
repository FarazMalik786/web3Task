import type { Metadata } from 'next'
import { Exo, Orbitron } from "next/font/google"
import './globals.css'
import { Header, Socials, TermsPopup } from "@/components"
import ReduxProvider from "@/redux/Provider"
import ProviderWeb3Modal from './ProviderWeb3Modal'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'

import { config } from './Web3ModalConfig'
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
console.log("initialState :", initialState);

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
