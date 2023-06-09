import React from "react";
export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
                <div className="sm:flex-grow md:w-1/2 sm:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-white">
                        Hi, I'm Nitu.
                        <br className="hidden sm:inline-block" />I love to build amazing
                        websites.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I design and develop dynamic websites.
                    </p>
                    <div class="flex">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-1 px-6 focus:outline-none hover:bg-green-600 rounded text-sm">
                            Work with me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-sm">
                            Projects
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                </div>
                <img className=" rounded" src="picture.jpeg" width="300px" height="100px" alt="BigCo Inc. logo"/>
            </div>
        </section>
    );
}
