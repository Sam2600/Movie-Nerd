import { Link } from "react-router-dom";

export const TestingPage = () => {
  return (
    <div className="bg-gray-100 mx-auto w-full dark:bg-gray-800 min-h-screen pt-20">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Coming Soon
          </h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
            This page is still under maintainence.
          </p>
        </div>
        <div className="mt-10">
          <form className="mx-auto max-w-xs">
            <div className="flex items-center border-b border-gray-500 dark:border-gray-300 py-2">
              <input
                type="email"
                className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                className="flex-shrink-0 border bg-gray-800 hover:bg-slate-100 hover:text-black border-gray-800 hover:border-black text-sm text-white py-1 px-2 rounded dark:bg-cyan-600 dark:hover:bg-cyan-800 dark:border-cyan-600"
                type="submit"
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-gray-500 dark:text-gray-300 text-xs">
            We'll notify you when we launch.
          </p>
          <div className="w-6/12 mx-auto ">
            <button className="my-10 w-full">
              <Link
                className="flex justify-center border rounded-lg py-2 border-black hover:bg-black hover:text-white items-center transition-all duration-150"
                to="/"
              >
                To Home Page
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
