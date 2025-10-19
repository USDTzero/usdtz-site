export default function Hero() {
return (
<section className="mx-auto max-w-6xl px-4 py-16">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
Stable by Design<br />
<span className="text-accent">USDT.z</span> — 1 USD Peg
</h1>
<p className="mt-5 text-white/80">
Buy with BNB at $1 per token. Sell back for BNB with a controlled -10% discount.
Powered by on-chain Chainlink BNB/USD pricing and transparent smart‑contract logic.
</p>
<div className="mt-8 flex gap-3">
<a href="#buy" className="btn-primary">Buy USDT.z</a>
<a href="#docs" className="btn-outline">Read Docs</a>
</div>
</div>
<div className="card p-6">
<img src="/og-image.png" className="rounded-xl2" alt="USDT.z hero visual" />
<p className="mt-4 text-sm text-white/70">
Contract preview, price oracle feed, and safety constraints are explained in the whitepaper.
</p>
</div>
</div>
</section>
);
}
