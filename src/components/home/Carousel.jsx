import React, { useEffect, useRef } from "react";
import img1 from "../../assets/carousel/carousel1.png";
import img2 from "../../assets/carousel/carousel2.png";
import img3 from "../../assets/carousel/carousel3.png";

const carouselData = [
    {
        title: "Study Abroad",
        text: "We provide best option for all academic profiles.",
        imgSrc: img1,
        button: "Discover more",
    },
    {
        title: "Start your journey today with our first free consultation",
        text: "We have professional consultants who will help you to select the best ccourse and the university for you",
        imgSrc: img2,
    },
    {
        title: "Efficient Learning Methods",
        text: "Get the complete support including education loan and accommodation.",
        imgSrc: img3,
    },
];

const Carousel = () => {
    const counterRef = useRef(1);
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);

    const handleCarouselScroll = () => {
        if (counterRef.current < 3) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.offsetWidth,
                behavior: "smooth",
            });
            counterRef.current++;
        } else {
            // reset carousel to the beginning.
            carouselRef.current.scrollLeft = 0;
            counterRef.current = 1;
        }
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            handleCarouselScroll();
        }, 3000);

        // Clean up the interval on component unmount
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div
            className="w-full relative overflow-x-auto scrollbar-hide scroll-smooth  h-[60vh] lg:h-auto "
            ref={carouselRef}
        >
            {/* Content */}
            <div
                className={`w-[${
                    carouselData.length * 100
                }%] flex h-full items-center`}
            >
                {carouselData.map((e, i) => {
                    return (
                        <div
                            className="w-full relative flex-grow-0 flex-shrink-0 lg:flex flex-row-reverse lg:justify-evenly "
                            key={i}
                        >
                            <img
                                src={e.imgSrc}
                                className="opacity-20 h-96 w-auto object-contain mx-auto lg:opacity-100 xl:h-[40rem]"
                            />
                            <article className="absolute w-full p-4 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col justify-center items-center lg:static lg:transform-none lg:flex lg:w-1/2 ">
                                <h1 className="text-3xl my-2 font-bold lg:text-4xl xl:text-6xl">
                                    {e.title}
                                </h1>
                                <p className="text-sm my-2 w-4/5 mx-auto xl:text-md xl:mt-5">
                                    {e.text}
                                </p>
                                {e.button && (
                                    <button className="mt-4 text-sm w-fit font-semibold bg-blue-500 py-3 px-4 rounded-full text-white cursor-pointer hover:bg-blue-600 lg:text-md  xl:px-6">
                                        {e.button}
                                    </button>
                                )}
                            </article>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
