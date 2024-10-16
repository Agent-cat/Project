import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import img2 from "../assets/img2.jpg";

const PropertyCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 100);
  };

  const { id, name, location, price } = property;

  return (
    <div className="relative rounded-2xl bg-white border dark:border-gray-400 dark:bg-gray-800  shadow-md overflow-hidden transition-transform duration-300  md:hover:scale-105">
      <Link to={`/property/${id}`}>
        <img src={img2} alt={name} className="w-full h-48 object-cover " />
        <p className="absolute top-2 left-2 bg-gray-500  text-white px-2  font-bold py-1 rounded-md text-sm">
          {property.saleOrRent.toUpperCase()}
        </p>
        <div className="p-4">
          <h3 className="font-bold text-gray-700 text-lg mb-2 dark:text-white">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{location}</p>
          <p className="text-xl text-blue-600 font-bold dark:text-white">
            ₹{price}
          </p>
        </div>
      </Link>
      <button
        onClick={handleFavoriteClick}
        className="absolute bottom-2 right-2 p-2 rounded-full transition-colors duration-300 bg-white dark:bg-gray-800"
      >
        <Heart
          size={24}
          className={`transition-all duration-300 ${
            isFavorite ? "text-pink-500" : "text-gray-500 dark:text-gray-300"
          } ${isAnimating ? "scale-125" : "scale-100"}`}
          fill={isFavorite ? "currentColor" : "none"}
        />
      </button>
    </div>
  );
};

export default PropertyCard;
