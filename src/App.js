import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MidSection from './components/MidSection';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar title={'TextUtils'}/>
      <MidSection heading={'Enter text to analyze below'}/>
      <Footer/>
    </>
  );
}

export default App;