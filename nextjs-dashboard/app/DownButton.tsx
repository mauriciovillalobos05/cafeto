import { useState, ReactNode } from 'react';

interface DropdownButtonProps {
  title: string;
  children: ReactNode;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ title, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 bg-brown-800 text-white font-semibold rounded-md focus:outline-none"
      >
        {title}
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="mt-2 p-4 bg-brown-900 rounded-md shadow-md">
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
