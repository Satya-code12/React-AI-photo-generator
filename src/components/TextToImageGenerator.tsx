import React, { useState, useEffect } from 'react';

type ContentProps = {
  rows: number;
};

const Content: React.FC<ContentProps> = () => {
  const [text, setText] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonText, setButtonText] = useState('Random Image Generate');

  useEffect(() => {
    setButtonText(text ? 'Generate Image' : 'Random Image Generate');
  }, [text]);

  const generateImage = async () => {
    setLoading(true);

    const apiKey = "";
    const prompt = text || 'a random image';

    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          prompt: prompt,
          n: 4,  // Number of images you want to generate
          size: '1024x1024'
        })
      });

      const data = await response.json();
      if (response.ok) {
        setImages(data.data.map((image: { url: string }) => image.url));
        setCurrentIndex(0);
      } else {
        console.error('Error generating image:', data);
      }
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
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Here Convert Your Imaginary Text To Images...
      </h1>
      <div className="flex flex-col items-center">
        <textarea
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded mb-4 outline-none"
          rows={3}
          placeholder="Enter text to generate your Image..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          onClick={generateImage}
          disabled={loading}
        >
          {loading ? 'Generating...' : buttonText}
        </button>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.slice(0, currentIndex + 4).map((image, index) => (
            <img key={index} src={image} alt={`Generated ${index}`} className="max-w-full rounded shadow-lg" />
          ))}
        </div>
        {currentIndex + 4 < images.length && (
          <button
            className="text-gray-800 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-6"
            onClick={loadMoreImages}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Content;
