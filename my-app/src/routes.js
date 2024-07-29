import App from './App'
import HomePage from './components/HomePage'
import FavoritePage from './components/FavoritePage';


const routes = [
    {
    path: "/",
    element: <App />,
    children: [{
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
    }]
    }
];

export default routes