"use client"
import { FaReact, FaAngular, FaJsSquare, FaHtml5, FaCss3Alt, FaBootstrap, FaJava, FaDatabase, FaNodeJs } from "react-icons/fa"
import PhotoShopIcon from "./photoshop-icon";
import IllustratorIcon from "./illustrator-icon";
import AdobeXdIcon from "./adobe-xd-icon";
import TypescriptIcon from "./typescript-icon";
import SpringBootIcon from "./spring-boot-icon";
import TailwindCssIcon from "./tailwind-css-icon";
import MuiIcon from "./mui-icon";

export default function Tecnologias (){

    return (
        <div className="grid grid-cols-8 gap-2 max-w-7xl mx-auto px-4 md:px-10 my-20 text-center">
            <div className="col-span-8 mb-6">
                <h2 className="primary-text">Tecnologias Utilizadas</h2>
            </div>
            <div className="col-span-8 md:col-span-4">
                <div className="p-4 mx-2 my-2 rounded-lg card-shadow bg-card">
                    <h5 className="primary-text py-4">Front-end</h5>
                    <div className="grid grid-cols-4 text-center pt-4">
                        <div className="col-span-2 md:col-span-1 py-4 text-base hover:text-blue-500">
                            <FaReact className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">React</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base hover:text-blue-500">
                            <FaAngular className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">Angular</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base hover:text-blue-500">
                            <FaJsSquare className="h-10 w-10  m-auto mb-2" />
                            <span className="font-semibold">Javascript</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base hover:text-blue-500">
                            <div className="h-10 w-10  m-auto mb-2">
                                <TypescriptIcon />
                            </div>
                            <span className="font-semibold">Typescript</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 text-center pt-4">
                        <div className="col-span-2 md:col-span-1 py-4 text-base hover:text-blue-500">
                            <FaHtml5 className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">HTML</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base hover:text-blue-500">
                            <FaCss3Alt className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">CSS</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base hover:text-blue-500">
                            <div className="h-10 w-10 m-auto mb-2">
                                <MuiIcon />
                            </div>
                            <span className="font-semibold">Material UI</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base hover:text-blue-500">
                            <div className="h-10 w-10 m-auto mb-2">
                                <TailwindCssIcon />
                            </div>
                            <span className="font-semibold">Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-8 md:col-span-2">
                <div className="p-4 mr-2 my-2 rounded-lg card-shadow bg-card">
                    <h5 className="primary-text py-4">Back-end</h5>
                    <div className="grid grid-cols-2 text-center pt-4">
                        <div className="col-span-1 py-4 text-base hover:text-blue-500">
                            <FaJava className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">Java</span>
                        </div>
                        <div className="col-span-1 py-4 text-base hover:text-blue-500">
                            <div className="h-10 w-10 m-auto mb-2">
                                <SpringBootIcon />
                            </div>
                            <span className="font-semibold">Spring boot</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-center pt-4">
                        <div className="col-span-1 py-4 text-base hover:text-blue-500">
                        <FaDatabase className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">SQL</span>
                        </div>
                        <div className="col-span-1 py-4 text-base hover:text-blue-500">
                            <FaNodeJs className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">Node JS</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-8 md:col-span-2 ">
            <div className="p-4 mr-2 my-2 rounded-lg card-shadow bg-card">
                    <h5 className="primary-text py-4">Design</h5>
                    <div className="grid grid-cols-2 text-center pt-4">
                        <div className="col-span-1 py-4 text-base hover:text-blue-500">
                            <div className="h-10 w-10 m-auto mb-2" >
                                <PhotoShopIcon  />
                            </div>
                            <span className="font-semibold">Photoshop</span>
                        </div>
                        <div className="col-span-1 py-4 text-base hover:text-blue-500">
                            <div className="h-10 w-10 m-auto mb-2" >
                                <IllustratorIcon />
                            </div>
                            <span className="font-semibold">Illustrator</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-center pt-4">
                        <div className="col-span-1 py-4 text-base hover:text-blue-500">
                            <div className="h-10 w-10 m-auto mb-2" >
                                <AdobeXdIcon />
                            </div>
                            <span className="font-semibold">Javascript</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}