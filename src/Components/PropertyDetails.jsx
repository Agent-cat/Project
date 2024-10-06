import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { properties } from "../Constants/Constants";
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedBHK, setSelectedBHK] = useState(property?.bhk[0]);
  const [activeSection, setActiveSection] = useState("overview");

  if (!property) {
    return <div>Property not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="md:w-[83%] w-full overflow-y-scroll md:m-2 h-full p-4 rounded-xl  dark:bg-gray-800">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center text-blue-600 dark:text-blue-400 hover:underline"
      >
        <ArrowLeft size={20} className="mr-2" />
        <div className="px-2 py-1 rounded-md bg-blue-600 text-white">Back</div>
      </button>
      <div className="bg-white dark:bg-gray-800 rounded-lg  p-6">
        <div className="hidden md:flex items-center justify-between ">
          <h2 className="text-4xl hidden md:flex font-bold mb-2 dark:text-white">
            {property.name}
          </h2>
          <p className="text-2xl  text-blue-600 font-bold dark:text-white">
            ₹{property.rentOrPrice.toLocaleString()}
            {property.rentOrPrice > 100000 ? "" : "/month"}
          </p>
        </div>
        <p className="text-gray-600 flex items-center mb-6 dark:text-gray-300">
          <MapPin size={20} className="mr-2" /> {property.address}
        </p>
        <div className="relative mb-4">
          <img
            src={`${property.images[currentImageIndex]}`}
            alt={`${property.name} ${currentImageIndex + 1}`}
            className="w-full h-96 object-cover rounded-3xl"
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex overflow-x-auto space-x-2 mb-4">
          {property.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${property.name} ${index + 1}`}
              className={`w-24 h-24 object-cover rounded-md cursor-pointer ${
                index === currentImageIndex ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <h2 className="text-4xl md:hidden flex justify-center font-bold mb-2 dark:text-white">
          {property.name}
        </h2>

        <p className="text-gray-600 flex md:hidden justify-center mb-6 items-center dark:text-gray-300 ">
          <MapPin size={20} className="mr-2" /> {property.address}
        </p>
        <p className="text-xl md:hidden flex   font-bold mb-4 dark:text-white">
          ₹{property.rentOrPrice.toLocaleString()}
          {property.rentOrPrice > 100000 ? "" : "/month"}
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">
            BHK Options:
          </h3>
          <div className="flex space-x-2">
            {property.bhk.map((bhk) => (
              <button
                key={bhk}
                onClick={() => setSelectedBHK(bhk)}
                className={`px-4 py-2 rounded ${
                  selectedBHK === bhk
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white"
                }`}
              >
                {bhk} BHK
              </button>
            ))}
          </div>
        </div>
        <div className="flex mt-4 items-center mb-2">
          <span className="text-yellow-400 mr-2">★</span>
          <span className="dark:text-white">{property.starRating}</span>
          <span className="text-gray-600 dark:text-gray-400 ml-2">
            ({property.numberOfReviews} reviews)
          </span>
        </div>
        <div>
          <div className="flex  space-x-6 mb-4">
            <span
              className={`text-lg font-medium cursor-pointer ${
                activeSection === "overview"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setActiveSection("overview")}
            >
              Overview
            </span>
            <span
              className={`text-lg font-medium cursor-pointer ${
                activeSection === "details"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setActiveSection("details")}
            >
              Details
            </span>
            <span
              className={`text-lg font-medium cursor-pointer ${
                activeSection === "amenities"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 dark:text-gray-400"
              }`}
              onClick={() => setActiveSection("amenities")}
            >
              Amenities
            </span>
          </div>
          <div className="h-[100px] overflow-y-scroll transition-all duration-300 ease-in-out">
            {activeSection === "overview" && (
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {property.details}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam accusantium exercitationem tempore impedit quaerat,
                  ex odio temporibus! Cum sit perspiciatis qui tempore quis
                  laboriosam eum repudiandae laborum itaque, quidem ea.
                </p>
              </div>
            )}
            {activeSection === "details" && (
              <div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
                  <li>Owner: {property.ownerName}</li>
                  <li>Location: {property.location}</li>
                  <li>BHK Options: {property.bhk.join(", ")}</li>
                </ul>
              </div>
            )}
            {activeSection === "amenities" && (
              <div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
                  <li>24/7 Security</li>
                  <li>Parking</li>
                  <li>Power Backup</li>
                  <li>Lift</li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex font-bold rounded-3xl mt-3 gap-4 mb-7">
            <button className="px-6 py-3 bg-white text-gray-800 border-2 border-gray-200 rounded-2xl hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300">
              Contact Agent
            </button>
            <button className="px-8 py-3 bg-red-500 text-white border  rounded-2xl hover:bg-red-600 transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
