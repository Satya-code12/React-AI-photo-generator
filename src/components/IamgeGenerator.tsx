import { useState, useEffect } from 'react'; 
import axios from 'axios'; 


const Content = () => {
  const [text, setText] = useState(''); 
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonText, setButtonText] = useState('Random Image Generate');

  
  useEffect(() => {
    setButtonText(text ? 'Generate Image' : 'Random Image Generate');
  }, [text]); 

  
  const generateImage = async () => {
    setLoading(true); 
    const options = {
      method: 'POST', // HTTP method
      url: 'https://ai-image-generator3.p.rapidapi.com/generate', // API endpoint
      headers: {
        'x-rapidapi-key': '93d20394b4msh764f854641e9200p11398ajsn8cfd1b834b9c',
        'x-rapidapi-host': 'ai-image-generator3.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        prompt: text, // Data payload with the input text
        page: 1 // Page number for the API request
      }
    };

    try {
      const response = await axios.request(options); 
      console.log('API Response:', response);
      setImages(response.data.results.images); 
      setCurrentIndex(0); 
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoading(false); 
    }
  };

  const loadMoreImages = () => {
    setCurrentIndex(currentIndex + 4); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-4 text-gray-600">Describe Your Image...</h1>
      <div className="flex flex-col items-center">
        <textarea
          className="w-full md:w-1/2 h-10 p-1 border-2 border-gray-400 rounded-lg mb-4 outline-none"
          rows={3}
          placeholder="Enter text to generate your Image..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={generateImage} 
          disabled={loading}
        >
          {loading ? 'Generating...' : buttonText}
        </button>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.slice(0, currentIndex + 8).map((image, index) => (
            <img key={index} src={image} alt={`Generated ${index}`} className="max-w-full rounded shadow-lg" />
          ))}
        </div>
        {currentIndex + 8 < images.length && (
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-6"
            onClick={loadMoreImages}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

// Export the TextToImageGenerator component as default
export default Content;