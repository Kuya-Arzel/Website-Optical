import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import bestsellerData from "../data/bestsellers.json";

const crownIcons = [
  "/icons/first.svg",
  "/icons/second.svg",
  "/icons/third.svg"
];

const tabs = [
  { key: "weeklyBestseller", label: "Weekly Bestsellers" },
  { key: "newArrival", label: "New Arrivals" },
  { key: "staffPick", label: "Staff Picks" }
];
const filters = ["ALL", "MEN", "WOMEN"];

const Bestsellers = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const [filter, setFilter] = useState("ALL");
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  const activeTabKey = tabs.find(tab => tab.label === activeTab)?.key;

  const filteredProducts = bestsellerData.filter(product => {
    const matchesTab = product[activeTabKey] === true;
    const matchesFilter =
      filter === "ALL" ? true : product.category?.toUpperCase() === filter;
    return matchesTab && matchesFilter;
  });

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6);

  useEffect(() => {
    if (containerRef.current) {
      setMaxHeight(containerRef.current.scrollHeight);
    }
  }, [displayedProducts]);

  return (
    <div className="bg-white text-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Tabs */}
        <div className="flex justify-center gap-10 border-b border-gray-300 pb-4">
          {tabs.map(tab => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`font-semibold ${
                activeTab === tab.label
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 py-6">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 border border-gray-300 rounded-full font-medium ${
                filter === f ? "bg-gray-100 text-black" : "text-gray-500"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product list */}
        <div
          ref={containerRef}
          className="flex flex-wrap justify-center gap-8 overflow-hidden pt-12 transition-all duration-500"
          style={{ maxHeight: showAll ? maxHeight : 1000 }}
        >
          {displayedProducts.map((product, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center relative w-64"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Animated crown */}
              {index < 3 && (
                <motion.div
                  className="absolute -top-10 left-6 w-12 h-12 z-10 drop-shadow-lg"
                  initial={{ y: -20, scale: 0 }}
                  animate={{ y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.2 }}
                >
                  <img
                    src={crownIcons[index]}
                    alt={`Rank ${index + 1}`}
                    className="w-full h-full"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </motion.div>
              )}

              {/* Product image */}
              <img src={product.image} alt={product.name} className="mb-4" />

              {/* Product details */}
              <p className="text-xs text-gray-400">{product.code}</p>
              <p className="text-sm font-semibold">{product.name}</p>
              <p className="text-xs text-gray-500">{product.price}</p>
            </motion.div>
          ))}
        </div>

        {/* See More / See Less */}
        {filteredProducts.length > 6 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bestsellers;
