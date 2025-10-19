import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
return (
<header className="sticky top-0 z-30 bg-[#0b1220]/70 backdrop-blur border-b border-white/10">
<nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
<Link to="/" className="flex items-center gap-2 font-bold">
<img src="/logo-usdtz.svg" className="h-7" />
<span>USDT.z</span>
</Link>
<div className="flex items-center gap-6 text-sm">
<NavLink to="/docs" className={({isActive}) => isActive ? "text-accent" : "opacity-80 hover:opacity-100"}>Docs</NavLink>
<NavLink to="/whitepaper" className={({isActive}) => isActive ? "text-accent" : "opacity-80 hover:opacity-100"}>Whitepaper</NavLink>
<a href="#buy" className="btn-primary">Buy USDT.z</a>
</div>
</nav>
</header>
);
}
