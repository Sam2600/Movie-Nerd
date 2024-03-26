/* eslint-disable react/prop-types */
import { FaHamburger } from "react-icons/fa";
import SearchInput from "./SearchInput";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import film from "../../assets/film-reel.svg";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Popular", to: "/popular", current: false },
  { name: "Recommended", to: "/recommended", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = ({ collapsed, setCollapsed }) => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-5 sm:px-1 lg:px-1">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4 items-center justify-start">
                    <FaHamburger
                      className="cursor-pointer text-white text-xl mr-6"
                      onClick={() => setCollapsed(!collapsed)}
                    />
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-white text-black transition-all duration-150 ease-in-out"
                            : "text-white hover:bg-slate-100 hover:text-black transition-all duration-150 ease-in-out",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="gap-3 w-10/12 md:w-7/12 lg:w-7/12 flex items-center justify-end ">
                <SearchInput />
                <NavLink to={`/`}>
                  <div className="flex flex-shrink-0 items-center px-6">
                    <img
                      className="h-12 w-auto"
                      src={film}
                      alt="Your Company"
                    />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-white text-black transition-all duration-150 ease-in-out"
                      : "text-white hover:bg-slate-100 hover:text-black transition-all duration-150 ease-in-out",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
