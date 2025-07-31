import { useParams } from "react-router-dom";
import { useCountry } from "../../api/useQueries";
import { Loader, ArrowLeft, MapPin, Users, Globe, Building, Currency, Languages } from "lucide-react";
import { NavLink } from "react-router-dom";

export const CountryDetails = () => {
  const params = useParams();
  const { data: country, isLoading, error } = useCountry(params.id);

  if (isLoading) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <Loader className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">Loading country details...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-400 text-lg">Error loading country: {error.message}</p>
        <NavLink to="/country" className="inline-block mt-4 text-blue-400 hover:text-blue-300">
          Back to Countries
        </NavLink>
      </div>
    </div>
  );

  if (!country) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-400 text-lg">Country not found</p>
        <NavLink to="/country" className="inline-block mt-4 text-blue-400 hover:text-blue-300">
          Back to Countries
        </NavLink>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <NavLink to="/country" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Countries
          </NavLink>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Flag Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src={country.flags?.svg}
                  alt={country.flags?.alt || `${country.name?.official} flag`}
                  className="w-full max-w-md h-auto rounded-lg shadow-2xl border border-gray-600"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-lg"></div>
              </div>
            </div>

            {/* Country Information */}
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                {country.name?.official || country.name?.common}
              </h1>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Native Names</p>
                      <p className="text-white font-medium">
                        {country.name?.nativeName 
                          ? Object.keys(country.name.nativeName)
                              .map((key) => country.name.nativeName[key].common)
                              .join(", ")
                          : "N/A"
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Population</p>
                      <p className="text-white font-medium">
                        {country.population?.toLocaleString() || "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Region</p>
                      <p className="text-white font-medium">{country.region || "N/A"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Capital</p>
                      <p className="text-white font-medium">{country.capital?.join(", ") || "N/A"}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Sub Region</p>
                      <p className="text-white font-medium">{country.subregion || "N/A"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Top Level Domain</p>
                      <p className="text-white font-medium">{country.tld?.join(", ") || "N/A"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Currency className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Currencies</p>
                      <p className="text-white font-medium">
                        {country.currencies 
                          ? Object.keys(country.currencies)
                              .map((curElem) => country.currencies[curElem].name)
                              .join(", ")
                          : "N/A"
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Languages className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Languages</p>
                      <p className="text-white font-medium">
                        {country.languages 
                          ? Object.keys(country.languages)
                              .map((key) => country.languages[key])
                              .join(", ")
                          : "N/A"
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;