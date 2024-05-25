

import Spinner from './Spinner';
import Usegif from '../Hooks/Usegif';



const Random = () => {

  const [gif, loading, fetchGif] = Usegif();

  function clickHandler() {
    fetchGif();
  }

  return (
    <div className='ml-96 bg-red-500 w-2/4 p-4 rounded-lg shadow-lg mt-5'>
      <h2 className="text-pink-800 text-xl font-bold mb-4 text-center underline">A Random Gif</h2>
      <div className='flex justify-center w-1/2 ml-44 h-64'>
        {
          loading ? (<Spinner />) : (<img src={gif} alt='Sorry, no GIF available.' width={400} />)
        }
      </div>
      <div className='font-bold flex justify-center mt-10'>
        <button onClick={clickHandler} className="w-64 bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
          Generate
        </button>
      </div>
    </div>
  );
}

export default Random;
