import App from "../App";
import Markdown from "../components/Markdown";


export default function Whitepaper() {
return (
<App>
<section className="mx-auto max-w-3xl px-4 py-12">
<div className="card p-6">
<Markdown src={new URL("../../docs/whitepaper.md", import.meta.url).toString()} />
</div>
</section>
</App>
);
}
