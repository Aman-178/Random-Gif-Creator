import './App.css';
import Tag  from './Components/Tag';
import Random from './Components/Random';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div id='aman'>
      <header className="w-screen">
        <h1 className="font-bold text-3xl bg-gradient-to-r from-red-500 via-green-900 to-yellow-900 text-black m-5 rounded-md flex justify-center items-center h-12">
          Random GIFS
        </h1>
      </header>
      <Random/>
      <Tag/>
      <ToastContainer/>
    </div>
  );
}

export default App;
