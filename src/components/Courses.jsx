import React from "react";

import courseImg1 from "../assets/courses/courses1.jpg";

const Courses = () => {
    return (
        <section className=" bg-blue-50 px-8 py-12 md:px-20 lg:px-28 xl:px-36 2xl:px-72 lg:py-20  ">
            <h2 className="text-2xl text-center font-bold mb-10 lg:text-3xl xl:text-3xl ">
                Popular Courses
            </h2>
            <div className="w-full mx-auto  overflow-hidden">
                <div className="flex gap-6 w-fit">
                    <Card
                        img={courseImg1}
                        title={
                            "IELTS (International English Language Testing System"
                        }
                        text={"Some description about the course."}
                    />
                    <Card
                        img={courseImg1}
                        title={
                            "IELTS (International English Language Testing System"
                        }
                        text={"chamak se chand bhi dhale"}
                    />
                    <Card
                        img={courseImg1}
                        title={
                            "IELTS (International English Language Testing System"
                        }
                        text={"chamak se chand bhi dhale"}
                    />
                    <Card
                        img={courseImg1}
                        title={
                            "IELTS (International English Language Testing System"
                        }
                        text={"chamak se chand bhi dhale"}
                    />
                </div>
            </div>
        </section>
    );
};

const Card = ({ img, title, text }) => {
    return (
        <div className="max-w-64 min-w-56 rounded-md bg-white lg:min-w-96">
            <img src={img} alt={title} className="w-full" />
            <h3 className="text-lg my-2 ml-1 font-semibold">{title}</h3>
            <p className="my-2 ml-1 ">{text}</p>
        </div>
    );
};

export default Courses;
