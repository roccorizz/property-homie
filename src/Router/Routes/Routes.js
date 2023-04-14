import { createBrowserRouter } from 'react-router-dom'



import AboutMe from '../../pages/About/AboutMe';
import Home from '../../pages/Homepage/Home/Home';
import PropertyDetails from '../../pages/PropertyDetails';
import Main from '../../Layout/Main';
import About from '../../pages/About/About';
import Blog from '../../pages/Blog/Blog';
import AllServices from '../../pages/Services/AllServices';
import ContactForm from '../../pages/Contactme/Contactme';
import SingleService from '../../pages/Services/SingleService';
import AddReview from '../../pages/Review/AddReview';



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
            {
                path: '/contact',
                element: <ContactForm />,

            },
            {
                path: '/singleservice/:id',
                element: <SingleService />,
                loader: ({ params }) => fetch(`https://propertyhomierocco-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <AddReview />
            }

        ]
    },
]);
export default router
