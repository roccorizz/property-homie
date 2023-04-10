import { createBrowserRouter } from 'react-router-dom'



import AboutMe from '../../components/About/AboutMe';
import Home from '../../pages/Homepage/Home/Home';
import PropertyDetails from '../../pages/PropertyDetails';
import Main from '../../Layout/Main';
import About from '../../components/About/About';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/aboutme',
                element: <AboutMe />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/property/:id',
                element: <PropertyDetails />
                // loader: ({ params }) => fetch(`https://propertyhomierocco-server.vercel.app/allproperties/${params.id}`)
            }
        ]
    },
]);
export default router
