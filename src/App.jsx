import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider,} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage2 from './pages/AboutPage2';
import NotFoundPage from './pages/NotFoundPage';
import Carrousel2 from './components/Carrousel2';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='apropos' element={<AboutPage2 />} />
      <Route path='*' element={<NotFoundPage />} /> 
      <Route path='slideshow/:id' element={<Carrousel2 />} />      
      </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}
export default App


