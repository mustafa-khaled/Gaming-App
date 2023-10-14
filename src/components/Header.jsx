import { Link, NavLink } from "react-router-dom";
import { headerLinksData } from "../data/data";
import { useEffect, useState } from "react";

import logo from "../assets/logo.png";

function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // Make The Header Fixed On Scrolling
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex h-[80px] items-center justify-center bg-transparent px-[20px] text-textColor
       ${isHeaderFixed && "fixed-header"}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[40px]" />
        </Link>

        {/* Links */}
        <ul
          className={`fixed ${
            showSidebar ? "right-0" : "right-[-100%]"
          } transition-right top-[80px] z-50  flex  h-[calc(100vh-80px)] w-[100%] flex-col
          items-center justify-center gap-[40px] border-t border-secondary bg-pri
          duration-300 md:static
          md:h-auto md:w-[300px] md:flex-row md:border-none md:bg-transparent`}
        >
          {headerLinksData?.map((link) => {
            return (
              <li key={link.id}>
                <NavLink to={link.to} className="relative text-lg">
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div
          className="block w-[25px] md:hidden"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          <i
            className={`fa-solid ${
              showSidebar ? "fa-xmark" : "fa-bars"
            }  text-lg hover:text-purple`}
          ></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
