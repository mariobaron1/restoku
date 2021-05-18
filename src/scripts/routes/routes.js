import Home from "../views/pages/home";
import Detail from "../views/pages/detail";
import About from "../views/pages/about";
import Like from "../views/pages/like";

const routes = {
  "/": Home, // default page
  "/home": Home,
  "/about": About,
  "/detail/:id": Detail,
  "/like": Like,
};

export default routes;
