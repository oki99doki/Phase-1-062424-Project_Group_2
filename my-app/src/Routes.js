import App from "./App";
import HomePage from "./compoenents/HomePage";
import FavoritePage from "./compoents/FavoritePage";




const routes = [
    {
    path: "/",
    element: <App />,
    children: {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/FavoritePage",
        element: <FavoritePage />
    },
    {
        path: "/NewDestination",
        element: <newDestination />
    }
    }
];

export default routes