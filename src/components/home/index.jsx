import React from "react";
import Contact from "./Contact";
import Courses from "./Courses";
import Carousel from "./Carousel";
import About from "./About";

const Home = () => {
    return (
        <>
            {/* Carousel */}
            <section className="w-full md:px-20 md:py-6 lg:px-28 xl:px-36 2xl:px-72">
                <Carousel />
            </section>

            {/* About and courses */}
            <section className="bg-blue-50">
                <About />
                <Courses />
            </section>

            {/* Contact */}
            <Contact />
        </>
    );
};

export default Home;
