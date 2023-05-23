//styles/fonts/index.ts

import { Poppins, Roboto } from 'next/font/google'

export const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'swap',
	weight: ['100','200','300','400','500','600','700','800','900'],
})

export const roboto = Roboto({
	subsets: ['latin'],
	variable: '--font-Roboto',
	display: 'swap',
	weight: ['100','300','400','500','700','900'],
})

//----------------------------------------------------------------------------------------------------------

//app/layout.tsx

import { poppins, roboto } from '@/styles/fonts';
 
export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="pt-br" className={`${poppins.variable} ${roboto.variable}`}>
      <body>
        <h1>My App</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}


//-----------------------------------------------------------------------------------------------------------

//uso:

'use client';
import styled from 'styled-components';

export const Title = styled.span`
	font-size: 14px;
	font-family: var(--font-poppins), sans-serif;
	font-weight: 500;
	color: #625f5f;
`

