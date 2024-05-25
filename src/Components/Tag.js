import React, { useState } from 'react';
import Spinner from './Spinner';
import Usegif from '../Hooks/Usegif';






const Tag = () => {

    const [tag, settag] = useState('cat')

    const [gif, loading, fetchGif] = Usegif(tag);


   



    return (
        <div className='ml-96 bg-red-500 w-2/4 p-4 rounded-lg shadow-lg mt-5'>
            <h2 className="text-pink-800 text-xl font-bold mb-4 text-center underline">Random ABCD Gif</h2>
            <div className='flex justify-center w-1/2 ml-44 h-64'>
                {
                    loading ? (<Spinner />) : (<img src={gif} alt='Sorry, no GIF available.' width={400} /> )
                    
                }
                
            </div>
            <div className='ml-60 mt-5'>
                <label className="block">
                    <p className='font-bold text-xl mb-2 ml-2'>Enter Gif Name</p>
                    <input type='text' value={tag} onChange={(event) => {
                        settag(event.target.value)
                    }} className='w-64 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500' name='gifname' ></input>
                </label>
            </div>
            <div className='font-bold flex justify-center mt-10'>
                <button onClick={() => {
                    fetchGif(tag)
                }} className="w-64 bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                    Generate
                </button>
            </div>
        </div>
    );
}

export default Tag;
