import Home from "./screens/Home";
import Loading from "./screens/Loading";

export const routes = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
  },
  {
    key: "home-route",
    title: "Loading",
    path: "/loading",
    enabled: false,
    component: Loading,
  },
];
