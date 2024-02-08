// components/LoadingSpinner.js

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Spinner SVG */}
      <svg
        className="spinner animate-spin w-20 h-20 text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.003 8.003 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.965 7.965 0 0116 12h4zm-5.657 4.657a8.009 8.009 0 01-1.414-1.414l-2.647 3A7.965 7.965 0 0012 20v4c3.042 0 5.824-1.135 7.938-3l-2.647-3zM12 4c1.305 0 2.536.298 3.657.822l2.647-3A7.965 7.965 0 0012 0V4z"
        ></path>
      </svg>
    </div>
  );
};


