import Home from "./screens/Home";
import Test from "./screens/Test";

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
    title: "Test",
    path: "/test",
    enabled: false,
    component: Test,
  },
];
