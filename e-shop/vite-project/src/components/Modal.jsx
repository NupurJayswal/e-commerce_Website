import React from 'react';

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
