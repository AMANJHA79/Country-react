import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import footerData from "../../api/FooterApi.json";

const Footers = () => {
  // Create a mapping of icon names to components
  const iconMap = {
    LocationIcon: MapPin,
    PhoneIcon: Phone,
    MailIcon: Mail,
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerData.map((footer, index) => {
            const { icon, title, details } = footer;
            // Get the icon component from the mapping
            const IconComponent = iconMap[icon];

            return (
              <div className="flex items-center gap-4" key={index}>
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
                  <p className="text-gray-400">{details}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 World Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
