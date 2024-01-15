import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import logo from './assets/logo.png'
 
const config: DocsThemeConfig = {
  logo:<Image src={logo} alt="Blocks" width={70} />,
  footer: {
    text: (
      <span>
        SquareYards {new Date().getFullYear()} ©{' '}
        <a>
          Blocks
        </a>
        .
      </span>
    )
  },
  navigation: {
    prev: true,
    next: true
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="BlocksDocs" />
    <title>Blocks Docs</title>
    </>
  ),
  docsRepositoryBase: 'https://github.com/JaswinderSingh1997/Blocksaurus/tree/main'
}

export default config
