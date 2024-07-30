import App from './App';
import HomePage from './components/HomePage';
import FavoritePage from './components/FavoritePage';
import NewDestination from "./components/NewDestination"


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
        element: <NewDestination />
    }]
    }
];


export default routes