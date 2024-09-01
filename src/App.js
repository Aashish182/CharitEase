import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import Navbar from './Navbar';
import { createBrowserRouter,RouterProvider,Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Donate from './Donate';
import Works from './Works';
import {CreateCampaign} from './CreateCampaign';
import Loader from './Loader';


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/Home",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/Donate",
      element:<><Navbar/><Donate/></>
    },
    {
      path:"/Works",
      element:<><Navbar/><Works/></>
    },
    {
      path:"/Contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path:"/Login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/Register",
      element:<><Navbar/><Register/></>
    },
    {
      path:"/CreateCampaign",
      element:<><Navbar/><CreateCampaign/></>
    },
    {
      path:"/Loader",
      element:<><Navbar/><Loader/></>
    },
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
