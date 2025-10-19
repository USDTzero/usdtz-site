# Tokenomics


USDT.z is a utility stable token targeting a 1 USD peg. The contract allows direct mint on buy and controlled redemption on sell.


- **Minting:** Owner can mint for treasury/liquidity operations.
- **Buy Flow:** BNB → USDT.z at $1, priced by Chainlink BNB/USD.
- **Sell Flow:** USDT.z → BNB with -10% discount; prevents reflexive bank‑run dynamics and subsidizes liquidity risk.
- **Reserves:** Contract BNB balance is withdrawable by owner for operational needs.
- **Bridging:** Future Zero‑Bridge modules (wrapped representations on other chains) with canonical supply tracking.
