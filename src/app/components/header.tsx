"use client"
import Image from "next/image"
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from "../../assets/images/logo.svg"
import { FaGithub, FaLinkedin, FaBehanceSquare } from "react-icons/fa"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { routes } from "../routes"

export default function Header(){

    useEffect(()=>{
      if (localStorage.theme === 'light') {
        setLight();
      } else if (localStorage.theme === 'dark' || ( window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDark();
      } else {
        setLight();
      }
    }, [])
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [darkTheme, setDarkTheme] = useState(false)

    const menuItens = routes;

    const pathName = usePathname()

    console.log(pathName)

    const setLight:()=> void = () => {
      setDarkTheme(false)
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }

    const setDark:()=> void = () => {
      localStorage.setItem('theme', 'dark')
      setDarkTheme(true)
      document.documentElement.classList.add('dark')
    }
   
    const changeTheme:()=> void =()=>{
      if(localStorage.getItem('theme') === 'light'){
        setDark();
      } else {
        setLight();
      }
    }

    const verifyActiveItem: (link: string)=> boolean = ( link )=> {
      const validate = pathName === link
      return validate;
    }
  
    return (
      <div>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Image src={logo} alt="" width={90} priority />
          </div>
          <div className="flex lg:hidden">
              <button
                    type="button"
                    className="rounded-full p-1 text-base hover:text-blue-600 dark:hover:hover:text-blue-400 mr-2"
                    onClick={changeTheme} 
                  >
                   { darkTheme ? ( <SunIcon className="h-6 w-6" /> ) : ( <MoonIcon className="h-6 w-6" /> ) }  
              </button>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-base"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12 hover:transition-all">
            { menuItens.map(({name, link}) => (
              <Link key={name} href={link} className={ verifyActiveItem(link) ? "text-link-active" : "text-link"}>
                {name}
              </Link>
            )) }
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-1">
              <button
                    type="button"
                    className="rounded-full p-1 text-base hover:text-blue-600 dark:hover:hover:text-blue-400 "
                    onClick={changeTheme} 
                  >
                   { darkTheme ? ( <SunIcon className="h-6 w-6" /> ) : ( <MoonIcon className="h-6 w-6" /> ) }  
              </button>
              <button
                    type="button"
                    className="rounded-full p-1 text-base hover:text-purple-700 dark:hover:text-purple-400"
                  >
                    <FaGithub className="h-6 w-6" />
              </button>
              <button
                    type="button"
                    className="rounded-full p-1 text-base hover:text-indigo-700 dark:hover:hover:text-indigo-400"
                  >
                    <FaLinkedin className="h-6 w-6" />
              </button>
              <button
                    type="button"
                    className="rounded-full p-1 text-base hover:text-blue-600 dark:hover:hover:text-blue-400"
                  >
                    <FaBehanceSquare className="h-6 w-6" />
              </button>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto menu-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between -mx-3">
              <Link href="/">
                <span className="sr-only">Nikolas Mello Developer</span>
                <Image src={logo} alt="" width={90} priority />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-600/10 dark:divide-slate-400/10">
                <div className="space-y-2 py-6">
                { menuItens.map(({name, link}) => (
                  <Link
                    key={name}
                    href={link}
                    className={verifyActiveItem(link) ? "-mx-3 block rounded-lg px-3 py-2 text-base text-link-active overflow-hidden" : "-mx-3 block rounded-lg px-3 py-2 text-base text-link overflow-hidden"}
                  >
                  {name}
                  </Link>
                ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-600 hover:text-purple-700 overflow-hidden"
                  >
                    <FaGithub fontSize={22} />
                    
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-600 hover:text-indigo-700 overflow-hidden"
                  >
                    <FaLinkedin fontSize={22}/>
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-600 hover:text-blue-600 overflow-hidden"
                  >
                    <FaBehanceSquare fontSize={22} />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    )
  }
  