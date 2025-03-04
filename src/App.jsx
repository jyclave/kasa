import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider,} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AproposPage from './pages/AproposPage';
import NotFoundPage from './pages/NotFoundPage';
import Slideshow from './components/Slideshow';
import Carrousel from './components/Carrousel';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='apropos' element={<AproposPage />} />
      <Route path='*' element={<NotFoundPage />} /> 
      <Route path='slideshow/:id' element={<Carrousel />} />      
      </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}
export default App


