import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function App({ children }: { children: React.ReactNode }) {
return (
<div className="min-h-dvh flex flex-col bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,184,148,0.15),transparent)]">
<Navbar />
<main className="flex-1">{children}</main>
<Footer />
</div>
);
}
