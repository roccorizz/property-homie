import { createBrowserRouter } from 'react-router-dom'



import AboutMe from '../../pages/About/AboutMe';
import Home from '../../pages/Homepage/Home/Home';
import PropertyDetails from '../../pages/PropertyDetails';
import Main from '../../Layout/Main';
import About from '../../pages/About/About';
import Blog from '../../pages/Blog/Blog';
import AllServices from '../../pages/Services/AllServices';


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
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/allservices',
                element: <AllServices />,

            },
        ]
    },
]);
export default router
