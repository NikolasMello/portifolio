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
                            <span className="font-semibold select-none">React</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <FaAngular className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold select-none">Angular</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <FaJsSquare className="h-10 w-10  m-auto mb-2" />
                            <span className="font-semibold select-none">Javascript</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <TypescriptIcon className="h-10 w-10  m-auto mb-2" />
                            <span className="font-semibold select-none">Typescript</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 text-center pt-4">
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <FaHtml5 className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold select-none">HTML</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <FaCss3Alt className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold select-none">CSS</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                            <MuiIcon className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold select-none">Material UI</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 py-4 text-base icon-hover">
                                <TailwindCssIcon className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold select-none">Tailwind CSS</span>
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
                            <span className="font-semibold select-none">Java</span>
                        </div>
                        <div className="col-span-1 py-4 text-base icon-hover">
                            <SpringBootIcon className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold select-none">Spring boot</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-center pt-4">
                        <div className="col-span-1 py-4 text-base icon-hover">
                        <FaDatabase className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold select-none">SQL</span>
                        </div>
                        <div className="col-span-1 py-4 text-base icon-hover">
                            <FaNodeJs className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold select-none">Node JS</span>
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
                            <PhotoShopIcon className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold select-none">Photoshop</span>
                        </div>
                        <div className="col-span-1 py-4 text-base icon-hover">
                            <IllustratorIcon className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold select-none">Illustrator</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-center pt-4">
                        <div className="col-span-1 py-4 text-base icon-hover">
                            <AdobeXdIcon className="h-10 w-10 m-auto mb-2" />
                            <span className="font-semibold select-none">Javascript</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}