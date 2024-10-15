import React, { useState, useEffect } from "react";
import PropertyCard from "../Components/PropertyCard";
import { Search, Filter, SortAsc, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Discover = ({ properties, setProperties }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("All");
  const [selectedBHK, setSelectedBHK] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedSaleOrRent, setSelectedSaleOrRent] = useState("All");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100000000]);
  const [sortBy, setSortBy] = useState("default");

  const places = ["All", ...new Set(properties.map((p) => p.location))];
  const bhks = ["All", ...new Set(properties.map((p) => p.bhk))];
  const types = ["All", ...new Set(properties.map((p) => p.type))];
  const saleOrRentOptions = ["All", "Sale", "Rent"];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const saleOrRentParam = params.get("saleOrRent");
    const placeParam = params.get("Place");
    const bhkParam = params.get("BHK");
    const typeParam = params.get("Type");
    if (saleOrRentParam) {
      setSelectedSaleOrRent(saleOrRentParam);
    }
    if (placeParam) {
      setSelectedPlace(placeParam);
    }
    if (bhkParam) {
      setSelectedBHK(bhkParam);
    }
    if (typeParam) {
      setSelectedType(typeParam);
    }
  }, [location]);

  useEffect(() => {
    let filtered = properties.filter((property) => {
      const matchesSearch =
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPlace =
        selectedPlace === "All" ||
        property.location.toLowerCase() === selectedPlace.toLowerCase();
      const matchesBHK =
        selectedBHK === "All" ||
        property.bhk.toLowerCase() === selectedBHK.toLowerCase();
      const matchesType =
        selectedType === "All" ||
        property.type.toLowerCase() === selectedType.toLowerCase();
      const matchesSaleOrRent =
        selectedSaleOrRent === "All" ||
        property.saleOrRent.toLowerCase() === selectedSaleOrRent.toLowerCase();
      const matchesPrice =
        property.price >= priceRange[0] && property.price <= priceRange[1];

      return (
        matchesSearch &&
        matchesPlace &&
        matchesBHK &&
        matchesType &&
        matchesSaleOrRent &&
        matchesPrice
      );
    });

    if (sortBy === "price-low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProperties(filtered);
    console.log("Filtered properties:", filtered);
  }, [
    properties,
    searchTerm,
    selectedPlace,
    selectedBHK,
    selectedType,
    selectedSaleOrRent,
    priceRange,
    sortBy,
  ]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSaleOrRentChange = (value) => {
    setSelectedSaleOrRent(value);
  };

  const getAppliedFilters = () => {
    const filters = [];
    if (selectedPlace !== "All")
      filters.push({ type: "Place", value: selectedPlace });
    if (selectedBHK !== "All")
      filters.push({ type: "BHK", value: selectedBHK });
    if (selectedType !== "All")
      filters.push({ type: "Type", value: selectedType });
    if (selectedSaleOrRent !== "All")
      filters.push({ type: "SaleOrRent", value: selectedSaleOrRent });
    if (priceRange[0] !== 0 || priceRange[1] !== 100000000)
      filters.push({
        type: "Price",
        value: `₹${priceRange[0]} - ₹${priceRange[1]}`,
      });
    return filters;
  };

  const removeFilter = (filterType) => {
    switch (filterType) {
      case "Place":
        setSelectedPlace("All");
        break;
      case "BHK":
        setSelectedBHK("All");
        break;
      case "Type":
        setSelectedType("All");
        break;
      case "SaleOrRent":
        setSelectedSaleOrRent("All");
        break;
      case "Price":
        setPriceRange([0, 100000000]);
        break;
      default:
        break;
    }
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
              className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4"
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
                  Sale or Rent
                </label>
                <select
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  value={selectedSaleOrRent}
                  onChange={(e) => handleSaleOrRentChange(e.target.value)}
                >
                  {saleOrRentOptions.map((option) => (
                    <option
                      key={option}
                      value={option === "All" ? "All" : option.toLowerCase()}
                    >
                      {option}
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
        className="mb-4"
      >
        <h2 className="text-lg font-bold mb-2 text-gray-700 dark:text-gray-300">
          Applied Filters:
        </h2>
        <div className="flex flex-wrap gap-2">
          {getAppliedFilters().map((filter, index) => (
            <span
              key={index}
              className="bg-blue-100 font-bold text-blue-800 text-sm mr-2 px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300 flex items-center group"
            >
              {`${filter.type}: ${filter.value}`}
              <button
                onClick={() => removeFilter(filter.type)}
                className="ml-2 focus:outline-none opacity-90 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <X size={16} />
              </button>
            </span>
          ))}
        </div>
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
              <PropertyCard setProperties={setProperties} property={property} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Discover;
