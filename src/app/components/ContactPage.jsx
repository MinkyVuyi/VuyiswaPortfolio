import React, { useState } from "react";
import Contacts from "../components/Contacts";

const ContactPage = () => {
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [contactOption, setContactOption] = useState("Phone");

  const handleToggleDetails = () => {
    setShowContactDetails(!showContactDetails);
  };

  const handleContactOptionChange = (option) => {
    setContactOption(option);
  };

  return (
    <div className="p-4">
      <Link
        href="#"
        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
        onClick={handleToggleDetails}
      >
        Hire Me
      </Link>
      {showContactDetails && (
        <div>
          <div className="my-4">
            <label className="text-lg mr-2">Choose contact option:</label>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={contactOption}
              onChange={(e) => handleContactOptionChange(e.target.value)}
            >
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
            </select>
          </div>
          <Contacts contactOption={contactOption} />
        </div>
      )}
    </div>
  );
};

export default ContactPage;
