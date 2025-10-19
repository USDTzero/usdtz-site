import App from "../App";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import BuySellWidget from "../components/BuySellWidget";
import AuditBadge from "../components/AuditBadge";


export default function Home() {
return (
<App>
<Hero />
<Stats />
<Features />
<BuySellWidget />
<AuditBadge />
</App>
);
}
