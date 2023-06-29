import Image from "next/image";
import logo from "../../assets/images/logo.svg"
import LogoCustom from "./custom-icons/logo-custom";
import { FaEnvelope, FaLinkedin, FaNode, FaNodeJs, FaReact } from "react-icons/fa";
import TypescriptIcon from "./custom-icons/typescript-icon";
import TailwindCssIcon from "./custom-icons/tailwind-css-icon";
import NextJSLogo from "./custom-icons/next-js-logo";


export default function Footer(){
    return (
        <div className="grid grid-cols-3 :gap-6 max-w-7xl mx-auto px-4 md:px-10 md:mt-20">
            <div className="col-span-3 md:col-span-1">
                <div className="p-4 md:m-2">
                    <div className="text-base w-16 -my-1">
                        <LogoCustom />
                    </div>   
                    <p>
                        Nikolas Mello<br/> Web Developer
                    </p>
                </div>
            </div>
            <div className="col-span-3 md:col-span-1">
                <div className="p-4 md:m-2 text-base">
                    <div className="flex items-center py-1"><FaEnvelope /> <a className="ml-2">nikolasmarcos@gmail.com</a> </div>
                    <div className="flex items-center py-1"><FaLinkedin /><a className="ml-2">LinkedIn</a></div>  
                </div>
            </div>
            <div className="col-span-3 md:col-span-1 ">
                <div className="p-4 md:m-2">
                    <p className="py-1">Esse portiólio foi desenvolvido com: </p>
                     <div className="flex text-pattern-color py-1 gap-3 w-full items-center">
                        <NextJSLogo className="w-90" />
                        <FaReact className="w-8 h-8 "/>
                        <FaNodeJs className="w-8 h-8" />
                        <TypescriptIcon className="w-8 h-8" />
                        <TailwindCssIcon className="w-8 h-8" />
                    </div>   
                </div>
            </div>
            <div className="col-span-3 border-top text-center py-4">
                <p>Nikolas Mello - 2023</p>
            </div>
    </div>  
    )
}