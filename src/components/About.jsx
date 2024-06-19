import React from "react";
import {
    FaGraduationCap,
    FaUsers,
    FaUniversity,
    FaCreditCard,
    FaGlobeAmericas,
} from "react-icons/fa";

const dataList = [
    {
        text: "Give yourself a chance to build a great carrier.",
        icon: <FaGraduationCap size={26} />,
    },
    {
        text: "We provide best option for all academic profiles",
        icon: <FaUsers size={26} />,
    },
    {
        text: "Select from 750 plus universities across 32 countries",
        icon: <FaUniversity size={26} />,
    },
    {
        text: "Get the complete support including education loan and accommodation.",
        icon: <FaCreditCard size={26} />,
    },
    {
        text: "Earn internationally recognised degree from world's top institutions.",
        icon: <FaGlobeAmericas size={26} />,
    },
];

const About = () => {
    return (
        <>
            <PreAboutSection />
            <article className="w-full p-6 py-12 z-10 lg:w-4/5 lg:mx-auto lg:mt-[-150px] xl:w-2/3 rounded-xl bg-white shadow-xl">
                <h2 className="text-2xl text-center font-bold mb-10 lg:text-3xl xl:text-3xl ">
                    About us
                </h2>
                <div className="flex flex-col gap-y-10 w-full lg:flex-row lg:gap-6 lg:h-fit lg:items-stretch xl:gap-8 xl:px-4">
                    <iframe
                        className="w-full h-80 rounded-md lg:h-auto"
                        src="https://www.youtube.com/embed/oaybomYFuHU?si=4pQ7BXe3DeYb_YyA"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                    <div className="w-full text-sm">
                        <p>
                            With nearly the same or less fees as that of the
                            reputed domestic private institutions, study
                            overseas in a higher ranked institute which provides
                            far better post study job opportunities.
                        </p>
                        <p className="mt-2">
                            Study abroad don't always necessarily require top
                            notch previous academic performance and huge budget,
                            but international studies provide the student an
                            opportunity to gain valuable skills along with
                            global exposure resulting in the best of the job
                            opportunities.
                        </p>
                        <p className="mt-">
                            We assure and ensure your promising future by
                            providing personalised solutions tailored to your
                            strengths, budget, background etc. and are matching
                            with available post study market opportunities.{" "}
                        </p>
                        <p className="mt-2">
                            At knowhow as a one-stop solution for your overseas
                            education, we offer end-to-end services including
                            country, course, university selection, eligibility
                            exam preparation, application process, education
                            loan support, visa guidance, accommodation
                            arrangements and job assistance.
                        </p>
                        <p className="mt-2">
                            Knowhow brings wide range of international education
                            options to choose from, which are more than 32
                            countries, more than 750 universities and thousands
                            of courses from all streams of education.
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
};

// Change name of this component
const PreAboutSection = () => {
    return (
        <section className="w-full flex flex-col bg-blue-500 px-8 py-12 gap-y-10 md:px-20 lg:px-28 xl:px-36 2xl:px-72 lg:flex-row lg:justify-between lg:pt-20 lg:pb-56 ">
            <article>
                <h2 className="text-xl text-center font-bold mb-10 lg:text-2xl xl:text-3xl lg:text-start xl:mb-12">
                    Start your journey to a better life with online practical
                    courses
                </h2>
                <ul>
                    {dataList.map(({ text, icon }, i) => {
                        return (
                            <li
                                key={i}
                                className="flex items-center gap-5 my-2 p-2 text-sm font-bold lg:text-md xl:text-lg"
                            >
                                <i className="bg-blue-800 text-white p-2 rounded-full">
                                    {icon}
                                </i>
                                {text}
                            </li>
                        );
                    })}
                </ul>
            </article>

            {/* Registration form */}
            <div className="lg:flex justify-center items-center">
                <form className="bg-sky-900 w-full h-auto p-6 rounded-lg text-sm flex flex-col justify-center gap-6 md:w-4/5 md:mx-auto lg:rounded-full lg:w-80 lg:h-80 lg:gap-5 lg:mx-auto xl:w-96 xl:h-96 xl:text-md">
                    <h3 className="text-lg font-bold text-center text-neutral-200 xl:text-xl">
                        Register your first free consultation
                    </h3>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="outline-none border-b-2 border-gray-500 p-1 bg-transparent text-gray-400 lg:w-4/5 lg:mx-auto"
                    ></input>
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="outline-none border-b-2 border-gray-500 p-1 bg-transparent text-gray-400 lg:w-4/5 lg:mx-auto"
                    ></input>
                    <input
                        type="submit"
                        className="px-3.5 py-2.5 mt-4 w-fit self-center bg-white rounded-full"
                        value="Get started"
                    />
                </form>
            </div>
        </section>
    );
};

export default About;
