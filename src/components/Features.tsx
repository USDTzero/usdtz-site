export default function Features() {
const items = [
{ title: "1 USD Peg", desc: "Simple peg target with on-chain BNB/USD oracle pricing." },
{ title: "Direct Buy/Sell", desc: "Buy with BNB at $1; sell back with a controlled -10% discount." },
{ title: "Transparent", desc: "Open-source contracts, public audits, and live oracle feed." },
];
return (
<section className="mx-auto max-w-6xl px-4 pb-16">
<div className="grid md:grid-cols-3 gap-4">
{items.map(i=> (
<div key={i.title} className="card p-6">
<h3 className="text-lg font-bold">{i.title}</h3>
<p className="mt-2 text-white/80">{i.desc}</p>
</div>
))}
</div>
</section>
);
}
