import {  useEffect, useState } from "react"
import Header from "../header/Header"
import Theory from"./Theory"
import Code from"./Code"

import { useLocation } from "react-router";
import SortingHandle from "../algorithms/SrotingHandle"


export default function Bubble(){
    const [theory,theorytoggle]=useState(true);
    const [code,codetoggle]=useState(false);
    const [visual,visualtoggle]=useState(false);
    const [fetchTheory,Settheory]=useState("");
    const [fetchCode,SetCode]=useState([]);
    const [working,Setworking]=useState("");
    const [Video,Setvideo]=useState("")
    const [TASC,SetTASC]=useState("");

    const location = useLocation();
    const { algoname } = location.state || {};
    console.log("hi",algoname);
    
    

    async function fetchData(algoname) {
        try {
            const response = await fetch(`http://localhost:4000/${algoname}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            
            Settheory(data.theory);
            Setworking(data.working);
            SetCode(Object.entries(data.code)); 
            SetTASC(data.TASC);
            Setvideo(data.Video);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(()=>{
        fetchData(algoname);
    },[algoname])

    function HandleTheory(){
        
        visualtoggle(false);
        codetoggle(false);
        theorytoggle(true);
    }
    function HandleCode(){
        visualtoggle(false)
        theorytoggle(false);
        codetoggle(true);
    }
    function HandleVisuals(){
        theorytoggle(false);
        codetoggle(false);
        visualtoggle(true);
    }
    return(
        <div className="text-white bg-gray-900 min-h-screen">
        <Header></Header>
        <main className="pb-6">
            <div className="pt-40 w-[80%] mx-auto">
                <h1 className="text-4xl">{algoname}</h1>
                <div className="flex flex-row pt-20">
                    <p className={`w-[30%] text-center pb-4 ${theory===true? " border-0 border-b-9 border-b-blue-700":"border-0"}`} onClick={()=>HandleTheory()}>Theory</p>
                    <p className={`w-[30%] text-center pb-4 ${code===true? " border-0 border-b-9 border-b-blue-700":"border-0"}`} onClick={()=>HandleCode()}>Code</p>
                    <p className={`w-[30%] text-center pb-4 ${visual===true? " border-0 border-b-9 border-b-blue-700":"border-0"}`} onClick={()=>HandleVisuals()}>Visualization</p>
                </div>
            </div>
            <div className="pt-10">
                {
                    visual===true?(
                        <SortingHandle Algo={algoname}></SortingHandle>
                    ):
                    theory ? (
                        <Theory fetchTheory={fetchTheory} working={working} algoname={algoname} TASC={TASC} Video={Video}></Theory>
                    ) : code ? (
                        <Code fetchCode={fetchCode}></Code>
                    ) : null
                }
            </div>
        </main>
        </div>
    )
}