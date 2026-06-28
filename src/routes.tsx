import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "docs", element: <Docs /> },
      { path: "about", element: <About /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
