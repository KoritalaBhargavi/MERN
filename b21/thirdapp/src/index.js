import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Fruits from './App';
//import reportWebVitals from './reportWebVitals';


import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="Blogs" element={<Blogs/>}/>
          <Route path="Contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    );
}









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
/*root.render(
  <React.StrictMode>
    <Fruits/>
  </React.StrictMode>
);*/