export const routes = {
  home: {
    route: "/home",
    title: "Home",
  },
  orders: {
    route: "/orders",
    title: "Orders",
  },
  users: {
    route: "/users",
    title: "Users",
  },
};

const { home, orders, users } = routes;
export const menuRoutes = [home, orders, users];
