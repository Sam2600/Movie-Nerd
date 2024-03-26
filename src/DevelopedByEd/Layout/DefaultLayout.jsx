import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { useEffect, useState } from "react";

const DefaultLayout = () => {
  //
  const [collapsed, setCollapsed] = useState(true);

  // Function to handle window resize
  const handleResize = () => {
    // Check if window width is less than 700
    if (window.innerWidth < 700) {
      setCollapsed(true);
    }
  };

  // Use useEffect to add the event listener when the component mounts
  useEffect(() => {
    // Call the handleResize function to set the initial state
    handleResize();
    // Add the event listener
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex-col">
      <NavBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex">
        <SideBar collapsed={collapsed} />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
