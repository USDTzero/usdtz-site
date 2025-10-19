import { useEffect, useState } from "react";


export default function Markdown({ src }: { src: string }) {
const [html, setHtml] = useState("");
useEffect(() => {
fetch(src).then(r => r.text()).then(text => {
// Very lightweight Markdown to HTML (headings + paragraphs)
const lines = text.split(/\n\n+/).map(block => {
if (/^#\s/.test(block)) return `<h1 class="text-3xl font-bold mb-4">${block.replace(/^#\s/, "")}</h1>`;
if (/^##\s/.test(block)) return `<h2 class="text-2xl font-bold mt-8 mb-3">${block.replace(/^##\s/, "")}</h2>`;
if (/^###\s/.test(block)) return `<h3 class="text-xl font-semibold mt-6 mb-2">${block.replace(/^###\s/, "")}</h3>`;
return `<p class="text-white/85 leading-7">${block}</p>`;
}).join("\n");
setHtml(lines);
});
}, [src]);
return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
