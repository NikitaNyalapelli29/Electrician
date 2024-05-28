// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const nav =['Home','about','service','blog','contact'];
  const hom =[
    {
      h1:"Electricial service provider",
      p: "Electric power, produced from central generating stations and distributed over an electrical transmission grid, is widely used in industrial, commercial, and consumer applications. ",
      cont: "Contact Us",
      img: "../public/Images/Illustration/slider-img.jpg"
    }
  ]
  const serv=[
    {
      h2:"Our Servives",
      h_img:"../public/images/illustration/plug.png",
      img1:"../public/images/illustration/s1.png",
      h5_1:"Equipment Installation",
      p1:"An electrical installation is a group of items of electrical equipment",
      img2:"../public/images/illustration/s2.png",
      h5_2:"Windmill Energy",
      p2:"Permanently electrically connected together and can be supplied",
      img3:"../public/images/illustration/s3.png",
      h5_3:"Equipment Management",
      p3:"The works of an electricity entity or from a generating source.",
      img4:"../public/images/illustration/s4.png",
      h5_4:"Offshore Engineering",
      p4:"An item of electrical equipment may be part of more than one",
      img5:"../public/images/illustration/s5.png",
      h5_5:"Offshore Engineering",
      p5:"These products are designed for easy installation."
    }
  ]
  const abou=[
    {

      h2:"About Us",
      img:"../public/images/illustration/plug.png",
      p:"Electricity is the flow of free electrons in a conductor from one atom to the next atom in the same general direction. This flow of electrons is referred to as current and is designated by the symbol “I”. Electrons move through a conductor at different rates and electric current has different values. Five rules to prevent electrical risks: Disconnect, prevent any possible feedback, verify the absence of voltage, ground and short-circuit, signal and delimit the working area.",
      read:"Read More",
      img1:"../public/images/illustration/about-img1.jpg",
      img2:"../public/images/illustration/about-img2.jpg"
    }
  ]

  const blo=[{
    h2:"Our Blog",
    img:"../public/images/illustration/plug.png",
    img1: "../public/images/illustration/blog1.jpg",
    img2: "../public/images/illustration/blog2.jpg",
    img3: "../public/images/illustration/blog3.jpg",
    img4: "../public/images/illustration/blog4.jpg",
    p:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised",
    h5:"Blog Title Goes Here"
  }]

  const cont=[
    {
      h2:"Contact Us",
      img:"../public/images/illustration/plug.png",
      send:"SEND"
    }
  ]
  const foot=[
    {
      p:"Location: India",
      call:"Call: +91 9123456589",
      mail:"mail@domain.com",
      sub:"SUBSCRIBE"  
    }
  ]
  return (
    <>
        <BrowserRouter>
          <Navigation navApp={nav}/>
          <Routes>
            <Route path="/" element={<Home homeApp={hom}/>}/>
            <Route path="/Service" element={<Service servApp={serv}/>}/>
            <Route path="/About" element={<About aboApp={abou}/>}/>
            <Route path="/Blog" element={<Blog blogApp={blo}/>}/>
            <Route path="/Contact" element={<Contact contApp={cont}/>}/>
          </Routes>
          <Footer footApp={foot}/>
        </BrowserRouter>
    </>
  )
}

export default App;