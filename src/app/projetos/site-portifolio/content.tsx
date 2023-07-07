"use client"
import { funtionalities } from "./funcionalities"
import { useRef, RefObject } from "react"
export default function SitePortifolioContent(){

    const sectionRefs:RefObject<HTMLDivElement[]> = useRef([]);

    const loadCode:(code:string)=>string =(load)=>{        
        if(load.length > 0){
            return "rounded-lg bg-sky-950 w-full overflow-x-auto p-4 text-gray-300 dark:text-gray-50 mb-4"
        } else {
            return "hidden"   
        }        
    }

    const addToRefs:(el:RefObject<HTMLDivElement>)=>void =(el)=> {
        if(el && !sectionRefs.current?.includes(el as any)){
            sectionRefs?.current?.push(el as any)
        }
    }

    const showRef:(id:number)=>void =(id)=>{
        let index: number = id - 1;
        let item:number;
        if(sectionRefs.current?.length !== undefined && sectionRefs.current?.length > 0){
            item = sectionRefs.current[index].offsetTop;
            window.scrollTo({top:item -60, behavior:"smooth"})
        }      
    }

    return(
        <div className="max-w-7xl mx-auto px-4 xl:px-5 pt-20 pb-3 scroll-smooth">

            <div className="grid grid-cols-5 gap-2">
                <div className="hidden md:flex col-span-3 md:col-span-1 text-base px-2 py-4">
                    <div className="fixed">
                    <h5 className="secondary-text py-4 px-2">Navegação</h5>
                    {funtionalities.slice(1).map((item)=> (
                    <div onClick={()=> showRef(item.id)}  className="flex text-base rounded-lg py-1 mb-1 hover:bg-slate-200 dark:hover:bg-indigo-950 px-2 cursor-pointer transition duration-150" key={item.id}>
                        <span className="select-none font-semibold">{item.title}</span>
                    </div>
                    ))}
                    </div>
                </div>
                <div className="col-span-5 md:col-span-4 text-base px-2">
                    {funtionalities.map((item)=> (
                        <div className="border-bottom py-4" key={item.id} id={item.title} ref={(element)=> addToRefs(element as any)}>
                            <h3 className="secondary-text">{item.title}</h3>
                            <p className="mb-4">{item.description}</p>
                            <pre className={loadCode(item.code)}>{item.code}</pre>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}