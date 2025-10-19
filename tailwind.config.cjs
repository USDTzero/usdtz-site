/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./index.html", "./src/**/*.{ts,tsx}"],
theme: {
extend: {
colors: {
brand: "#1a2033",
accent: "#00B894"
},
boxShadow: {
soft: "0 10px 30px rgba(0,0,0,0.08)"
},
borderRadius: {
xl2: "1.25rem"
}
}
},
plugins: []
};
