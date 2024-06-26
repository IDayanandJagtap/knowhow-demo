import React, { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle ham menu
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 left-0 z-50 border-t-4 border-t-blue-600 bg-white px-8 py-4 flex justify-between items-center shadow-md md:px-20 md:py-4 lg:px-28 xl:px-36 2xl:px-72 md:border-t-6">
            {/* Title/ logo */}
            <h1 className="text-lg font-bold md:text-2xl lg:text-2xl">
                KnowHow
            </h1>

            {/* links */}
            <div className="hidden md:flex justify-end gap-5 items-center w-1/3 lg:gap-10">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        className="text-md hover:text-blue-800 cursor-pointer"
                        href={link.href}
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    className="text-md py-1.5 px-5 rounded-full border border-blue-500 cursor-pointer text-blue-500 hover:text-white hover:bg-blue-500"
                    href="#contact"
                >
                    Contact
                </a>
            </div>

            {/* Ham button */}
            <MdOutlineMenu
                className="md:hidden"
                size={28}
                onClick={handleToggleMenu}
            />

            {/* Ham menu */}
            {isMenuOpen && (
                <div className="w-full fixed top-0 left-0 bottom-0 z-10  bg-white p-4 border-4 border-blue-900  md:hidden">
                    {/* Close button */}
                    <div className="w-full text-end">
                        <p className="text-2xl inline-block p-2 w-12 text-center rounded-full hover:bg-blue-500 ">
                            <MdOutlineClose
                                size={32}
                                className="hover:text-white"
                                onClick={handleToggleMenu}
                            />
                        </p>
                    </div>

                    {/* Links */}
                    <ul className="w-full flex flex-col justify-between items-center mt-32 p-8">
                        {navLinks.map((link) => (
                            <li
                                key={link.name}
                                className="my-4 text-xl font-semibold hover:text-blue-500"
                            >
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Buttons */}
                    <div className="flex justify-center w-full">
                        <a
                            className="text-lg font-semibold bg-blue-500 py-2 px-4 rounded-xl text-white cursor-pointer hover:bg-blue-600"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
