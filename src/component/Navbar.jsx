import React, { useEffect, useState } from "react";
// import { href } from "react-router-dom";
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";
// import { AuthContext } from "../contexts/AuthProvider";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // const { user } = useContext(AuthContext);
  // console.log(user);

  // toggle button
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Correctly remove the event listener
    };
  }, []);

  // navItems
  const navItems = [
    { href: "Home", path: "/" },
    { href: "About", path: "/about" },
    { href: "Shop", path: "/shop" },
    { href: "Sell Your Book", path: "/admin/dashboard" },
    { href: "Blog", path: "/blog" },
  ];

  return (
    <>
      <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-100 z-[999]">
        <nav
          className={`py-4 lg:px-24 px-4 ${
            isSticky
              ? "sticky transition-all ease-in duration-2000 top-0 left-0 right-0 bg-orange-400"
              : "transition-all ease-linear duration-2000"
          }`}
        >
          <div className="flex justify-between items-center text-base gap-8">
            {/* insert logo */}
            <href
              to="/"
              className="text-2 font-bold text-blue-700 item-center gap-2 flex justify-center items-center"
            >
              <FaBlog className="inline-block" />
              Ajmico
            </href>
            {/* nav item for large device */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ href, path }) => (
                <href
                  key={path}
                  to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >
                  {href}
                </href>
              ))}
            </ul>

            {/* button for larger devices */}
            <div className="space-x-12 hidden lg:flex items-center">
              <button>
                <FaBarsStaggered className="w-5 hover:text-blue-700 mr-1" />
              </button>
              {/* {user ? user.displayName : "Demo User"} */}
            </div>

            {/* menu button for mobile devices */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
              >
                {isMenuOpen ? (
                  <FaXmark className="h-5 w-5 text-black" />
                ) : (
                  <FaBarsStaggered className="h-5 w-5 text-black" />
                )}
              </button>
            </div>

            {/* navItems for mobile devices */}
            <div
              className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
                isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
              }`}
            >
              {navItems.map(({ href, path }) => (
                <href
                  key={path}
                  to={path}
                  onClick={toggleMenu}
                  className="block text-base text-white uppercase cursor-pointer "
                >
                  {href}
                </href>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
