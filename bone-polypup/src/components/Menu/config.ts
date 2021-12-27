import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Layered Farming',
    icon: 'LayerIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Layer 1 - PUP Token',
        href: 'https://pup.polypup.finance',
      },
      {
        label: 'Layer 2 - BONE Token',
        href: 'https://bone.polypup.finance',
      },
    ],
  },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x6bb45cEAC714c52342Ef73ec663479da35934bf7',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x6bb45cEAC714c52342Ef73ec663479da35934bf7',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'AutoPUP Docs',
    icon: 'MoonIcon',
    href: 'https://polypup-farm.gitbook.io/autopup/'
  },
  {
    label: 'Vaults (coming soon)',
    icon: 'SunIcon',
    href: ''
  },
  {
    label: 'Listings',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickChart',
        href: 'https://quickchart.app/token/0x6bb45cEAC714c52342Ef73ec663479da35934bf7'
      },
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x6bb45cEAC714c52342Ef73ec663479da35934bf7-polygon'
      },
      {
        label: 'Dapp Radar',
        href: 'https://dappradar.com/polygon/defi/polypup-finance',
      },
      {
        label: 'Vfat Tools',
        href: 'https://vfat.tools/polygon/polypupbone/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/PolyPup-Farm/',
      },
      {
        label: 'Docs',
        href: 'https://polypup-farm.gitbook.io/polypup-layer-2-bone/',
      },
    ],
  },
  {
    label: 'Audit by Techrate',
    icon: 'AuditIcon',
    href: 'https://polypup-farm.gitbook.io/polypup-layer-2-bone/security/audit',
  },
]

export default config
