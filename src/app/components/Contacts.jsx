import React from "react";

const Contacts = ({ contactOption }) => {
  return (
    <div className="p-4">
      <p className="text-2xl text-primary-500">Contact Information:</p>
      {contactOption === "Phone" && (
        <p className="text-lg mt-2">
          Phone: <span className="text-primary-500">069 186 9937</span>
        </p>
      )}
      {contactOption === "Email" && (
        <p className="text-lg mt-2">
          Email:{" "}
          <span className="text-primary-500">
            <a
              href="mailto:dialevuyiswa@gmail.com"
              className="text-primary-500 hover:underline"
            >
              dialevuyiswa@gmail.com
            </a>
          </span>
        </p>
      )}
    </div>
  );
};

export default Contacts;
