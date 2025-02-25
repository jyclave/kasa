import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
  <> 
    <Navbar />
    <Outlet />  
    <Footer />
  </>
  );
};

export default MainLayout;

//the Navbar will be on all pages
//the Footer will be on all  pages


  