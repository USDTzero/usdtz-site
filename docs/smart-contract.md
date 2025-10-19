# Smart Contract Overview (USDT.z)


- **Standard:** BEP-20 (ERC-20 compatible)
- **Name/Symbol:** USDT Zero (USDT.z)
- **Peg Target:** 1 USD
- **Buy:** Send BNB → mint USDT.z at $1 per token using Chainlink BNB/USD
- **Sell:** Return USDT.z → receive BNB with -10% discount applied
- **Owner Controls:** mint(to, amount); withdrawBNB/withdrawERC20; setPriceFeed; setDiscountBps; setStaleTimeout
- **Security:** Reentrancy guard; stale oracle timeout; owner‑only administrative actions


> The full reference implementation is in the previous chat. Add its verified address once deployed on BSC mainnet.
