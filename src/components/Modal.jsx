import React from "react";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="max-w-3xl w-full max-h-[768px] bg-[#1e1e1e] rounded-lg p-2">
        <button
          className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-700 focus:outline-none"
          onClick={closeModal}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
