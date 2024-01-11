import Home from './pages/home';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from './pages/AboutUsPage';
import OurSubjectsPage from './pages/OurSubjectsPage';
import OurTutorsPage from './pages/OurTutorsPage';
import ContactUsPage from './pages/ContactUsPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/Home" element ={<Home/>}/>
      <Route path ="/OurSubjectsPage" element ={<OurSubjectsPage/>}/>
      <Route path ="/OurTutorsPage" element ={<OurTutorsPage/>}/>
      <Route path ="/AboutUsPage" element ={<AboutUsPage/>}/>
      <Route path ="/ContactUsPage" element ={<ContactUsPage/>}/>
      <Route path ="/CookiesPolicyPage" element ={<CookiesPolicyPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
