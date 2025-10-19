import stats from "../data/stats.json";


export default function Stats() {
return (
<section className="mx-auto max-w-6xl px-4 pb-10">
<div className="grid sm:grid-cols-3 gap-4">
{stats.map((s) => (
<div key={s.label} className="card p-6">
<div className="text-sm opacity-70">{s.label}</div>
<div className="text-2xl font-bold mt-1">{s.value}</div>
</div>
))}
</div>
</section>
);
}
