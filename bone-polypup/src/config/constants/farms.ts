import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    otherExchange: 'QuickSwap',
    lpSymbol: 'BONE-USDC QLP',
    decimal: 18,
    lpAddresses: {
      137: '0x2CC05c660f35E8692CA99dB95922CB744d44ef20',
    },
    tokenSymbol: 'BONE',
    tokenAddresses: {
      137: '0x6bb45cEAC714c52342Ef73ec663479da35934bf7',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 1,
    risk: 5,
    otherExchange: 'QuickSwap',
    lpSymbol: 'BONE-WMATIC QLP',
    decimal: 18,
    lpAddresses: {
      137: '0xeb168C9D678dC34D64337F4eA12cf14ed6fbE34B', // bone-wmatic lp
    },
    tokenSymbol: 'BONE',
    tokenAddresses: {
      137: '0x6bb45cEAC714c52342Ef73ec663479da35934bf7', // wmatic token
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
  },
  {
    pid: 19,
    risk: 5,
    otherExchange: 'SushiSwap',
    lpSymbol: 'BONE-WMATIC SLP',
    isCommunity: true,
    decimal: 18,
    lpAddresses: {
      137: '0x7Cb3F5D8a3C4605D466c577d2707c3299112dBBc', // bone-wmatic lp
    },
    tokenSymbol: 'BONE',
    tokenAddresses: {
      137: '0x6bb45cEAC714c52342Ef73ec663479da35934bf7', // wmatic token
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
  },
  {
    pid: 17,
    risk: 5,
    otherExchange: 'SushiSwap',
    lpSymbol: 'BONE-USDC SLP',
    decimal: 18,
    lpAddresses: {
      137: '0xbeF2DD804649A3C5420F08A7C84A9562Df001ebb',
    },
    tokenSymbol: 'BONE',
    tokenAddresses: {
      137: '0x6bb45cEAC714c52342Ef73ec663479da35934bf7',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 2,
    risk: 5,
    otherExchange: 'QuickSwap',
    lpSymbol: 'PUP-USDC QLP',
    decimal: 18,
    lpAddresses: {
      137: '0x767f8BD67a5f133BdDF3b285c5E2FD3D157A2cdC',
    },
    tokenSymbol: 'PUP',
    tokenAddresses: {
      137: '0xcFe2cF35D2bDDE84967e67d00aD74237e234CE59',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 3,
    risk: 5,
    otherExchange: 'QuickSwap',
    lpSymbol: 'PUP-WMATIC QLP',
    decimal: 18,
    lpAddresses: {
      137: '0xBC68d2A5920c4ffaEa20E2BE48a0E09055481976', // pup-wmatic lp
    },
    tokenSymbol: 'PUP',
    tokenAddresses: {
      137: '0xcFe2cF35D2bDDE84967e67d00aD74237e234CE59', // wmatic token
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
  },
  {
    pid: 4,
    risk: 5,
    otherExchange: 'QuickSwap',
    lpSymbol: 'WMATIC-USDC QLP',
    decimal: 18,
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 5,
    risk: 5,
    otherExchange: 'QuickSwap',
    lpSymbol: 'WETH-USDC QLP',
    decimal: 18,
    lpAddresses: {
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 6,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BONE',
    decimal: 18,
    lpAddresses: {
      137: '0x2CC05c660f35E8692CA99dB95922CB744d44ef20' // pup-usdc lp
    },
    tokenSymbol: 'BONE',
    tokenAddresses: {
      137: '0x6bb45cEAC714c52342Ef73ec663479da35934bf7'  // actual token
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PUP',
    decimal: 18,
    lpAddresses: {
      137: '0x767f8BD67a5f133BdDF3b285c5E2FD3D157A2cdC' // pup-usdc lp
    },
    tokenSymbol: 'PUP',
    tokenAddresses: {
      137: '0xcFe2cF35D2bDDE84967e67d00aD74237e234CE59'  // actual token
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 8,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WMATIC',
    decimal: 18,
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 21,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'miMATIC',
    decimal: 18,
    lpAddresses: {
      137: '0x160532D2536175d65C03B97b0630A9802c274daD'
    },
    tokenSymbol: 'miMATIC',
    tokenAddresses: {
      137: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 20,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DFYN',
    decimal: 18,
    lpAddresses: {
      137: '0xE16498aF4b6132a82772962f9b97d0b8Fe40f4FF'
    },
    tokenSymbol: 'DFYN',
    tokenAddresses: {
      137: '0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 18,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'LINK',
    decimal: 18,
    lpAddresses: {
      137: '0x70ceE55c98F6DA2685807611f115eA737d4a248E'
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      137: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 9,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'QUICK',
    decimal: 18,
    lpAddresses: {
      137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb'
    },
    tokenSymbol: 'QUICK',
    tokenAddresses: {
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    decimal: 18,
    lpAddresses: {
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d'
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 11,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    decimal: 6,
    lpAddresses: {
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498'
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'AAVE',
    decimal: 18,
    lpAddresses: {
      137: '0x7c76b6b3fe14831a39c0fec908da5f17180df677'
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 16,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'FISH',
    decimal: 18,
    lpAddresses: {
      137: '0x0Df9e46C0eAEdf41B9d4bbE2Cea2aF6E8181b033'
    },
    tokenSymbol: 'FISH',
    tokenAddresses: {
      137: '0x3a3Df212b7AA91Aa0402B9035b098891d276572B'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    decimal: 18,
    lpAddresses: {
      137: '0xf04adBF75cDFc5eD26eeA4bbbb991DB002036Bdd'
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      137: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 14,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    decimal: 6,
    lpAddresses: {
      137: '0x2cf7252e74036d1da831d11089d326296e64a728'
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 15,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    decimal: 6,
    lpAddresses: {
      137: '0x2cf7252e74036d1da831d11089d326296e64a728'
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },



]

export default farms