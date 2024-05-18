import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import cardsData from "./data2.jsx"; // Assuming your data is stored in data2.js

export default function Banner2() {
  // State to track the index of the first card to display in the slider
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 cards per screen

  // Update the number of visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 640 ? 1 : 3);
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const itemsPerPage = visibleCards; // Number of items per page

  // Function to handle moving to the previous set of cards in the slider
  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  // Function to handle moving to the next set of cards in the slider
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerPage >= cardsData.length ? 0 : prevIndex + itemsPerPage
    );
  };

  return (
    <div className="bg-gray-200 py-24 sm:py-32 relative">
      {/* Previous icon */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 hover:text-gray-700"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>
      {/* Next icon */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 hover:text-gray-700"
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-5xl font-semibold leading-7 text-indigo-600">Featured Products</h2>
        </div>
        <div className="flex mt-16 w-full items-center justify-center">
          <div className="flex w-full justify-center overflow-hidden">
            {/* Map over the cardsData array to generate cards dynamically */}
            {cardsData.slice(startIndex, startIndex + visibleCards).map((card, index) => (
              <div key={index} className="relative m-4 flex w-full sm:w-1/2 lg:w-1/3 max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                  <img className="object-cover" src={card.imageUrl} alt="product image" />
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{card.discount}</span>
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{card.title}</h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">N{card.price}</span>
                      <span className="text-sm text-slate-900 line-through">N{card.originalPrice}</span>
                    </p>
                    <div className="flex">
                      {[...Array(Math.floor(card.rating))].map((_, index) => (
                        <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      {card.rating % 1 !== 0 && (
                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
