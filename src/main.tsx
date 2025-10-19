import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Whitepaper from "./pages/Whitepaper";
import NotFound from "./pages/NotFound";


const router = createHashRouter([
{ path: "/", element: <Home /> },
{ path: "/docs", element: <Docs /> },
{ path: "/whitepaper", element: <Whitepaper /> },
{ path: "*", element: <NotFound /> }
]);


createRoot(document.getElementById("root")!).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);
