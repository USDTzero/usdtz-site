export default function Footer() {
return (
<footer className="border-t border-white/10 py-8 mt-10">
<div className="mx-auto max-w-6xl px-4 text-sm text-white/70">
<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
<div className="opacity-80">© {new Date().getFullYear()} USDT.z — All rights reserved.</div>
<div className="flex gap-4">
<a className="link" href="#">GitHub</a>
<a className="link" href="#">Docs</a>
<a className="link" href="#">Whitepaper</a>
</div>
</div>
</div>
</footer>
);
}
