import React from "react";
import countryData from "../api/CountryData.json";

const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
          Here are Some{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Interesting Facts
          </span>{' '}
          about the World
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countryData.map((country) => {
            const { id, countryName, capital, population, interestingFact } = country;
            return (
              <div key={id} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4">{countryName}</h3>
                    <div className="space-y-3 text-gray-300">
                      <p className="flex items-center gap-2">
                        <span className="font-semibold text-blue-400">Capital:</span>
                        <span>{capital}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="font-semibold text-blue-400">Population:</span>
                        <span>{population}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="font-semibold text-blue-400">Fact:</span>
                        <span className="text-sm leading-relaxed">{interestingFact}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { About };
