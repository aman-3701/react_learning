
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';



function App() {
  return (
    <>
    <Navbar title = "Aman"  about = "About" />
   <div className="container">
    {/* <Textform heading = "Enter Text to Analyze"/
    > */}
  <About/>
   </div>
  
    </>
  );
  
}

export default App;
