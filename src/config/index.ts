import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

// export const PIZZA_PER_BLOCK = new BigNumber(0.25)
export const PIZZA_PER_BLOCK = new BigNumber(5)
export const BLOCKS_PER_YEAR = new BigNumber(10512000)
export const BSC_BLOCK_TIME = 3
export const PIZZA_POOL_PID = 1

export const BUY_SMART_URL = "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x68590a47578e5060a29fd99654f4556dbfa05d10"
export const WALLETS = [
  {
    name: "Metamask",
    url: "https://docs.binance.org/smart-chain/wallet/metamask.html",
  },
  {
    name: "TrustWallet",
    url: "https://docs.binance.org/smart-chain/wallet/trustwallet.html",
  },
  {
    name: "Binance Chain Extension Wallet",
    url: "https://docs.binance.org/smart-chain/wallet/binance.html",
  },
  {
    name: "SafePal",
    url: "https://www.youtube.com/watch?v=ObZXYxJpgwA",
  },
]
export const DOC_EARN_BNB_URL = "https://docs.moonrat.finance/innovation/earn-bnb"
export const DOC_ANTI_WHALES_URL = "https://docs.moonrat.finance/innovation/anti-whales"
