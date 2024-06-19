import React from "react";

const Contact = () => {
    return (
        <div className="bg-blue-500 px-8 py-12 md:px-20 lg:px-28 xl:px-36 2xl:px-72 lg:py-20  lg:bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600">
            <div className="flex flex-col gap-10 md:flex-row md:mt-8 lg:gap-12 xl:gap-28">
                <section className="flex flex-col gap-4 md:mt-4 xl:text-md lg:mt-10">
                    <h2 className="text-2xl font-bold mb-2 lg:text-3xl xl:text-3xl">
                        Contact Us
                    </h2>
                    <article className="flex flex-col gap-5 lg:mt-5">
                        <p>You are always welcome to contact us.</p>
                        <p>
                            Feel free to email, call or complete the form to
                            resolve any of your queries.
                        </p>
                        <p>
                            +91 8830735771 <br />
                            <a href="mailto:register@knowhow.org.in">
                                register@knowhow.org.in
                            </a>
                        </p>
                    </article>
                </section>

                <form className="w-full rounded-md bg-white mx-auto p-4 text-sm shadow-lg xl:w-1/2 xl:p-6 lg:rounded-lg xl:rounded-xl">
                    <h3 className="text-xl text-center font-bold mb-2 lg:text-3xl xl:text-3xl xl:text-start">
                        Get In Touch
                    </h3>
                    <div className="relative my-6 group ">
                        <input
                            type="text"
                            id="contactNameInput"
                            placeholder="Full name"
                            className="peer placeholder-transparent  border-2 rounded-md w-full p-3 outline-none focus:border-blue-500"
                        />
                        <label
                            id="contactNameInput"
                            className="px-1 bg-white text-slate-500 absolute left-3 -top-[0.01rem] transform -translate-y-1/2 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:-top-[0.01rem] peer-focus:text-blue-500 peer-focus:text-xs"
                        >
                            Full Name
                        </label>
                    </div>
                    <div className="relative my-6 group ">
                        <input
                            type="text"
                            id="contactEmailInput"
                            placeholder="Email"
                            className="peer placeholder-transparent border-2 rounded-md w-full p-3 outline-none focus:border-blue-500"
                        />
                        <label
                            id="contactEmailInput"
                            className="px-1 bg-white text-slate-500 absolute left-3 -top-[0.01rem] transform -translate-y-1/2 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:-top-[0.01rem] peer-focus:text-blue-500 peer-focus:text-xs"
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative my-6 group ">
                        <textarea
                            id="contactMessageInput"
                            placeholder="Tell us about your message"
                            rows={7}
                            className="peer placeholder-transparent border-2 rounded-md w-full p-3 outline-none focus:border-blue-500"
                        />
                        <label
                            id="contactMessageInput"
                            className="px-1 bg-white text-slate-500 absolute left-3 -top-2 transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-xs"
                        >
                            Tell us about your message
                        </label>
                    </div>
                    <div className="w-full flex justify-end text-xs">
                        <input
                            type="submit"
                            value="Send message"
                            className="py-2.5 px-3 bg-blue-600 rounded-md text-white hover:bg-blue-500 lg:text-md cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
