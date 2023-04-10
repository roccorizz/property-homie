import { RouterProvider } from 'react-router-dom';
import './App.css';

import { Toaster } from 'react-hot-toast'
import router from './Router/Routes/Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Homepage/Home/Home';
import PropertyDetails from './pages/PropertyDetails';
function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <RouterProvider router={router}></RouterProvider>

      {/* <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer /> */}
      <Toaster />
    </div>
  );
}

export default App;
