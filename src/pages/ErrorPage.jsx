import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
          <div className="mb-6">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">
              Oops! Something went wrong
            </h1>
            {error && (
              <p className="text-gray-400 text-sm">
                {error.data || error.message || "An unexpected error occurred"}
              </p>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Home className="w-4 h-4" />
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
