import React, { useState, useEffect } from "react";
import { properties } from "../Constants/Constants";
import PropertyCard from "../Components/PropertyCard";
import { Search, Filter, SortAsc } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("All");
  const [selectedBHK, setSelectedBHK] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sortBy, setSortBy] = useState("default");

  const places = ["All", "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
  const bhks = ["All", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];
  const types = ["All", "Apartment", "House", "Villa", "PG"];
  const sortOptions = ["default", "price-low-to-high", "price-high-to-low"];

  useEffect(() => {
    let filtered = properties.filter((property) => {
      const matchesSearch =
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPlace =
        selectedPlace === "All" || property.location === selectedPlace;
      const matchesBHK =
        selectedBHK === "All" || property.bhk.includes(parseInt(selectedBHK));
      const matchesType =
        selectedType === "All" || property.type === selectedType;
      const matchesPrice =
        property.rentOrPrice >= priceRange[0] &&
        property.rentOrPrice <= priceRange[1];
      return (
        matchesSearch &&
        matchesPlace &&
        matchesBHK &&
        matchesType &&
        matchesPrice
      );
    });

    if (sortBy === "price-low-to-high") {
      filtered.sort((a, b) => a.rentOrPrice - b.rentOrPrice);
    } else if (sortBy === "price-high-to-low") {
      filtered.sort((a, b) => b.rentOrPrice - a.rentOrPrice);
    }

    setFilteredProperties(filtered);
  }, [
    searchTerm,
    selectedPlace,
    selectedBHK,
    selectedType,
    priceRange,
    sortBy,
  ]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:w-[83%] w-full overflow-y-scroll m-2 h-full p-4 rounded-xl dark:bg-gray-800"
    >
      <motion.h1
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-gray-700 dark:text-gray-300 text-center text-2xl font-bold mb-4"
      >
        Discover Properties
      </motion.h1>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
      >
        <div className="flex items-center m-4">
          <Search className="text-blue-500 mr-2" />
          <input
            type="text"
            placeholder="Search properties by name or location..."
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleFilters}
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            <Filter size={20} />
          </motion.button>
          <motion.div className="ml-2">
            <select
              className="p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort By</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
            </select>
          </motion.div>
        </div>
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Place
                </label>
                <select
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  value={selectedPlace}
                  onChange={(e) => setSelectedPlace(e.target.value)}
                >
                  {places.map((place) => (
                    <option key={place} value={place}>
                      {place}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  BHK
                </label>
                <select
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  value={selectedBHK}
                  onChange={(e) => setSelectedBHK(e.target.value)}
                >
                  {bhks.map((bhk) => (
                    <option key={bhk} value={bhk}>
                      {bhk}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Type
                </label>
                <select
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Price Range
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="w-1/2 p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([parseInt(e.target.value), priceRange[1]])
                    }
                    placeholder="Min"
                  />
                  <span className="mx-2">-</span>
                  <input
                    type="number"
                    className="w-1/2 p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    placeholder="Max"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Discover;
