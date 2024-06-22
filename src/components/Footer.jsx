import React from "react";
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoYoutube,
} from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="flex flex-col bg-neutral-800 text-gray-400 text-xs px-8 py-12 gap-y-8 overflow-hidden  md:px-20 lg:px-28 lg:text-sm lg:gap-y-16 xl:px-36 2xl:px-72 lg:py-20 ">
            <div className="flex flex-col gap-y-8 md:flex-row md:justify-between lg:gap-16">
                <section className="flex flex-col gap-8 items-start ">
                    <div>
                        <h3 className="text-lg font-bold text-gray-300">
                            KnowHow
                        </h3>
                        <p className="my-2">Where talent meets opportunity!</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-300">
                            Join us
                        </h3>
                        <div className="flex gap-4 my-2 mt-4">
                            <a href="">
                                <IoLogoFacebook
                                    size={20}
                                    className="text-blue-500"
                                />{" "}
                            </a>
                            <a href="">
                                <IoLogoInstagram
                                    size={20}
                                    className="text-pink-600"
                                />
                            </a>
                            <a href="">
                                <IoLogoYoutube
                                    size={20}
                                    className="text-red-500"
                                />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-8 items-start lg:gap-16">
                    <div>
                        <h3 className="text-lg font-bold text-gray-300">
                            Contact Info
                        </h3>
                        <p className="my-2">
                            +91 8830735771 <br />
                        </p>
                        <p>
                            <a href="mailto:register@knowhow.org.in">
                                register@knowhow.org.in
                            </a>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-300">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col my-2 gap-2 lg:flex-row">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#courses">Courses</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-gray-200">
                        Newsletter
                    </h3>
                    <form action="#" className="my-4 flex flex-col gap-4">
                        <div className="w-full relative mt-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="peer placeholder-transparent w-4/5 p-2 bg-transparent border-b-2 border-gray-700 outline-none lg:w-full"
                            />
                            <label
                                htmlFor="newsletterEmail"
                                className="absolute text-neutral-400 -top-2.5 left-1 peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-2 peer-focus:-top-2.5 peer-focus:left-1 peer-focus:text-[10px] transition-all duration-300"
                            >
                                Email
                            </label>
                        </div>
                        <input
                            type="submit"
                            value="Subscribe"
                            className="border border-gray-700 w-fit px-3 py-2 rounded-full cursor-pointer  hover:text-gray-700 lg:self-end"
                        />
                    </form>
                    <p className="my-2 text-[10px] lg:text-xs">
                        Please note - we do not spam your email.
                    </p>
                </section>
            </div>
            <div className="border-t-2 border-gray-400 w-[200%] -ml-[50%] -mb-4">
                <p className="text-center mt-6">
                    Copyright &copy; 2024 KnowHow
                </p>
            </div>
        </footer>
    );
};

export default Footer;
