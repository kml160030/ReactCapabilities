import { Home } from "./components/Home";
import Login from "./components/Login";
import Grid from "./GridFunction";
import Plus from "./Plus";

const AppRoutes = [
  {
    index: true,
    element: <Login />
  },
    {
        path: '/grid',
        element: <Grid />
    },
    {
        path: '/plus',
        element: <Plus />
    },
];

export default AppRoutes;
