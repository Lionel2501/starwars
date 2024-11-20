import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Technologies from "./pages/Technologies";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact";
import AppTest from "./components/AppTest";

const routes = [
  { path: "/", element: <Home />, name: "Accueil" },
  { path: "/experience", element: <Experience />, name: "Expérience" },
  { path: "/technologies", element: <Technologies />, name: "Technologies" },
  { path: "/demo", element: <Demo />, name: "Démo" },
  { path: "/contact", element: <Contact />, name: "Contact" },
  { path: "/demo/app_test", element: <AppTest />, name: "App Test" }
];

export default routes;
