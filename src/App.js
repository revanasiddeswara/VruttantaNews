// import logo from './logo.svg';
import './App.css';



  import React, { Component } from 'react'
import Navbar from './component/Navbar';
import Newsbody from './component/Newsbody';
import Footer from './component/Footer';
import {
  BrowserRouter,
  Route,
  Routes,


} from "react-router-dom";
import Science from './component/Science';
import Business from './component/Business';
import Health from './component/Health';
import Entertainment from './component/Entertainment';
import Sports from './component/Sports';
import Technology from './component/Technology';

document.title="ವೃತ್ತಾಂತ"
      setInterval(() => {
        document.title="top news"
      },2000);
      setInterval(() => {
        document.title="ವೃತ್ತಾಂತ"
      },1000);
      setInterval(() => {
        document.title="Breaking news"
      },1500);
  export class App extends Component { 
    
    pageSize=6;
    render() {
      return (
        <div> 
          
          <BrowserRouter>
          <Navbar />

          <Routes> 
          <Route exact path="/" element = {<Newsbody key="general" pageSize={this.pageSize} country="in" category="General"/>}/>
          <Route exact path="/business" element={<Business key="business" category="Business"/>}/> 
          <Route exact path="/entertainment" element={<Entertainment category="Entertainment"/>}/> 
          <Route exact path="/general" element={<Newsbody key="general" pageSize={this.pageSize} country="in" category="General"/>}/> 
          <Route exact path="/health" element={<Health category="Health"/>}/> 
          <Route exact path="/science" element={<Science category="Science"/>}/> 
          <Route exact path="/sports" element={<Sports category="Sports"/>}/> 
          <Route exact path="/technology" element={<Technology category="Technology"/>}/> 
          {/* <Route exact path="/" element = {<Newsbody key="us" pageSize={this.pageSize} country="us" category="us"/>}/> */}

        </Routes> 
          </BrowserRouter> 
          <Footer/>
        </div>
      )
    }
  }
  
  
  
export default App;
