//create a custom hook 
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const API_KEY = 'XHW3esWEoe0hKWpycRjN7vl1otZqPrN3';

const Usegif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setloading] = useState(false)
    const notify1 = () => {
        // Calling toast method by passing string
        toast("Wait Gif Loading");
    };
     
    async function fetchGif(tag) {
        setloading(true)
        notify1();
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const output = await axios.get(tag ? (url) : (randomurl))
        const img = output.data.data.images.downsized_large.url;
        setGif(img)
        setloading(false)
        

    }

    useEffect(() => {
        fetchGif();
    }, []);
    return [gif, loading, fetchGif]


}

export default Usegif
