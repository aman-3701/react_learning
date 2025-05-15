
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';



function App() {
  return (
    <>
    <Navbar title = "Aman"  about = "About" />
   <div className="container">
    <Textform heading = "Enter Text to Analyze"/>
   </div>
  
    </>
  );
  
}

export default App;
