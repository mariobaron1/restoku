import Home from "../views/pages/home";
import Detail from "../views/pages/detail";
import About from "../views/pages/about";

const routes = {
  "/": Home, // default page
  "/home": Home,
  "/about": About,
  "/detail/:id": Detail,
};

export default routes;
