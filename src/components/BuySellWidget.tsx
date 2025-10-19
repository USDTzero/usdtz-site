import { useId, useState } from "react";


export default function BuySellWidget() {
const id = useId();
const [mode, setMode] = useState<"buy"|"sell">("buy");
const [amount, setAmount] = useState("100");


return (
<section id="buy" className="mx-auto max-w-6xl px-4 pb-20">
<div className="card p-6">
<div className="flex items-center justify-between">
<h2 className="text-xl font-bold">Buy / Sell</h2>
<div className="bg-white/5 rounded-xl p-1">
<button onClick={() => setMode("buy")} className={`px-3 py-1 rounded-lg ${mode==='buy'?'bg-accent text-[#0b1220]':''}`}>Buy</button>
<button onClick={() => setMode("sell")} className={`px-3 py-1 rounded-lg ${mode==='sell'?'bg-accent text-[#0b1220]':''}`}>Sell</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6 mt-6">
<div>
<label htmlFor={`${id}-amt`} className="text-sm opacity-70">{mode==='buy' ? 'BNB Amount' : 'USDT.z Amount'}</label>
<input id={`${id}-amt`} value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" min="0" step="0.0001" className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3" />
<p className="mt-2 text-xs text-white/60">
* Demo UI only. Wallet actions and contract calls will be enabled later.
</p>
</div>
<div className="self-end flex gap-3">
<button className="btn-primary">{mode==='buy'?'Buy USDT.z':'Sell for BNB'}</button>
<button className="btn-outline">Connect Wallet</button>
</div>
</div>
</div>
</section>
);
}
