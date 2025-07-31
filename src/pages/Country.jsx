import React, { useState } from "react";
import { useCountries } from "../api/useQueries";
import { Loader } from "lucide-react";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/ui/SearchFilter";

const Country = () => {
  const { data: countries = [], isLoading, error } = useCountries();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  if (isLoading) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <Loader className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">Loading countries...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-400 text-lg">Error loading countries: {error.message}</p>
      </div>
    </div>
  );

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterRegion = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const filterCountries = countries
    .filter((country) => searchCountry(country) && filterRegion(country))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return b.name.common.localeCompare(a.name.common);
      }
    });

  return (
    <section className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Explore{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Countries
            </span>
          </h1>
          <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
            Discover fascinating information about countries from around the world
          </p>
        </div>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          onSort={handleSort}
        />

        {filterCountries.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No countries found matching your criteria</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filterCountries.map((country, index) => {
              return <CountryCard key={index} country={country} />;
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export { Country };
