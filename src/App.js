import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends Component {
  render(){
return (
  <div>
  <Navbar/>
  <Slider/>
  <Section1/>
  <Section2/>
  <Contact/>
  <Footer/>
  </div>
)
  }
}

export default App;
