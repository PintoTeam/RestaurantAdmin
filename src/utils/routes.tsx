import { Home, Orders, Users } from "@/lib/icons";

export const routes = {
  home: {
    route: "/home",
    title: "Home",
    icon: <Home className="w-6 h-6" />,
  },
  orders: {
    route: "/orders",
    title: "Orders",
    icon: <Orders className="w-6 h-6" />,
  },
  users: {
    route: "/users",
    title: "Users",
    icon: <Users className="w-6 h-6" />,
  },
};

const { home, orders, users } = routes;
export const menuRoutes = [home, orders, users];
