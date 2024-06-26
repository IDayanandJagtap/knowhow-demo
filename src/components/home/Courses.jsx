import React from "react";

import courseImg1 from "../../assets/courses/courses1.jpg";
import courseImg2 from "../../assets/courses/courses2.jpg";
import courseImg3 from "../../assets/courses/courses3.jpg";
import courseImg4 from "../../assets/courses/courses4.jpg";
import courseImg5 from "../../assets/courses/courses5.jpg";

const courseList = [
    {
        title: "IELTS (International English Language Testing System)",
        text: "IELTS is one of the most widely accepted English language proficiency tests for study, work, and migration purposes",
        imgSrc: courseImg1,
    },
    {
        title: "TOEFL (Test of English as a Foreign Language)",
        text: "TOEFL measures the English proficiency of non-native English speakers. One of the most accepted English language proficiency tests. ",
        imgSrc: courseImg2,
    },
    {
        title: "GRE (Graduate Record Examination)",
        text: "GRE is a standardized test required for admission to graduate programs worldwide. This test is required mainly by reputed USA universities for the Post Graduate degree program",
        imgSrc: courseImg3,
    },
    {
        title: "GMAT (Graduate Management Admission Test)",
        text: "GMAT is a standardized test required for admission to MBA programs worldwide. ",
        imgSrc: courseImg4,
    },
    {
        title: "PTE (Pearson Test of English)",
        text: "PTE assesses English language proficiency for study, work, and migration.",
        imgSrc: courseImg5,
    },
];

const Courses = () => {
    return (
        <section className=" bg-blue-50 px-8 py-12 md:px-20 lg:px-28 xl:px-36 2xl:px-72 lg:py-20  ">
            <h2 className="text-2xl text-center font-bold mb-10 lg:text-3xl xl:text-3xl ">
                Popular Courses
            </h2>
            <div className="w-full mx-auto">
                <div className="grid gap-6 w-full grid-cols-auto-fit-300 box-border">
                    {courseList.map((course, i) => {
                        return (
                            <Card
                                key={i}
                                img={course.imgSrc}
                                title={course.title}
                                text={course.text}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const Card = ({ img, title, text }) => {
    return (
        <div className="rounded-md bg-white shadow border group hover:shadow-lg">
            <div className="w-full overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full object-contain transition-all duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-2">
                <h3 className="text-base my-2 ml-1 font-semibold">{title}</h3>
                <p className="my-2 ml-1 text-sm">{text}</p>
            </div>
        </div>
    );
};

export default Courses;
