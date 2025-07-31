import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="group">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <div className="relative overflow-hidden">
          <img 
            src={flags.svg} 
            alt={flags.alt} 
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white truncate">
            {name.common}
          </h3>
          
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-blue-400">Population:</span>
              <span>{population.toLocaleString()}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-blue-400">Region:</span>
              <span>{region}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-blue-400">Capital:</span>
              <span>{capital?.[0] || 'N/A'}</span>
            </p>
          </div>

          <NavLink to={`/country/${name.common}`}>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn">
              Read More
              <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
