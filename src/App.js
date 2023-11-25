import './App.css';
import Navbar from './comps/Navbar';
import TextForm from './comps/TextForm';

function App() {
  return (
    <>
    <Navbar title="Title" about="About"/>
    {/* <Navbar/> */}
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below"/>
    </div>
    </>
);
}

export default App;
