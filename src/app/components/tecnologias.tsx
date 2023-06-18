"use client"
import { FaReact, FaAngular, FaJsSquare, FaHtml5, FaCss3Alt, FaBootstrap, FaJava, FaDatabase, FaNodeJs } from "react-icons/fa"
import PhotoShopIcon from "./custom-icons/photoshop-icon";
import IllustratorIcon from "./custom-icons/illustrator-icon";
import AdobeXdIcon from "./custom-icons/adobe-xd-icon";
import TypescriptIcon from "./custom-icons/typescript-icon";
import SpringBootIcon from "./custom-icons/spring-boot-icon";
import TailwindCssIcon from "./custom-icons/tailwind-css-icon";
import MuiIcon from "./custom-icons/mui-icon";

export default function Tecnologias (){

    return (
        <div className="grid grid-cols-8 gap-2 max-w-7xl mx-auto px-4 md:px-10 my-20 text-center">
            <div className="col-span-8 mb-6">
                <h3 className="secondary-text">Tecnologias Utilizadas</h3>
            </div>
            <div className="col-span-8 md:col-span-4">
                <div className="flex justify-center -mb-[9px]">
                    <div className="w-3/4">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent  w-full"></div>
                    </div>
                </div>
                <div className="p-4 mx-2 my-2 rounded-lg card-shadow bg-card overflow-hidden">
                    <h5 className="primary-text py-4">Front-end</h5>
                    <div className="grid grid-cols-4 text-center pt-4">
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <FaReact className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">React</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <FaAngular className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">Angular</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <FaJsSquare className="h-10 w-10  m-auto mb-2" />
                            <span className="font-semibold">Javascript</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <div className="h-10 w-10  m-auto mb-2">
                                <TypescriptIcon />
                            </div>
                            <span className="font-semibold">Typescript</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 text-center pt-4">
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <FaHtml5 className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">HTML</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <FaCss3Alt className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">CSS</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <div className="h-10 w-10 m-auto mb-2">
                                <MuiIcon />
                            </div>
                            <span className="font-semibold">Material UI</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <div className="h-10 w-10 m-auto mb-2">
                                <TailwindCssIcon />
                            </div>
                            <span className="font-semibold">Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-8 md:col-span-2">
                <div className="flex justify-center -mb-[9px]">
                    <div className="w-3/4">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent  w-full"></div>
                    </div>
                </div>
                <div className="p-4 mx-2 my-2 rounded-lg card-shadow bg-card">
                    <h5 className="primary-text py-4">Back-end</h5>
                    <div className="grid grid-cols-2 text-center pt-4">
                        <div className="col-span-1 py-4 text-base icon-hover">
                            <FaJava className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">Java</span>
                        </div>
                        <div className="col-span-1 py-4 text-base icon-hover">
                            <div className="h-10 w-10 m-auto mb-2">
                                <SpringBootIcon />
                            </div>
                            <span className="font-semibold">Spring boot</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-center pt-4">
                        <div className="col-span-1 py-4 text-base icon-hover">
                        <FaDatabase className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">SQL</span>
                        </div>
                        <div className="col-span-1 py-4 text-base icon-hover">
                            <FaNodeJs className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold">Node JS</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-8 md:col-span-2 ">
                <div className="flex justify-center -mb-[9px]">
                    <div className="w-3/4">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-400 dark:via-blue-700 to-transparent  w-full"></div>
                    </div>
                </div>
            <div className="p-4 mx-2 my-2 rounded-lg card-shadow bg-card">
                    <h5 className="primary-text py-4">Design</h5>
                    <div className="grid grid-cols-2 text-center pt-4">
                        <div className="col-span-1 py-4 text-base icon-hover">
                            <div className="h-10 w-10 m-auto mb-2" >
                                <PhotoShopIcon  />
                            </div>
                            <span className="font-semibold">Photoshop</span>
                        </div>
                        <div className="col-span-1 py-4 text-base icon-hover">
                            <div className="h-10 w-10 m-auto mb-2" >
                                <IllustratorIcon />
                            </div>
                            <span className="font-semibold">Illustrator</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-center pt-4">
                        <div className="col-span-1 py-4 text-base icon-hover">
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