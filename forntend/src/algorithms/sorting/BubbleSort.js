// import { useState,useEffect } from "react";

// const arr=[50,40,30,20,10];

// const sleep=(ms)=>{
//     return new Promise((resolve)=>setTimeout(resolve,ms));
// }

// export default function BubbleSort(){
//         const [temp,settemp]=useState(arr);
//         const [play,setplay]=useState(false);
//         const [Active,setActive]=useState([]);
//         const [corrected,SetCorrected]=useState([]);
        
//         const sort= async function(){
//             for(let i=arr.length-1;i>0;i--){
//                 for(let j=0;j<i;j++){
//                     setActive([j,j+1]);
//                     if(arr[j]>arr[j+1]){
//                         let temp=arr[j+1];
//                         arr[j+1]=arr[j];
//                         arr[j]=temp;
//                         settemp([...arr]);
//                     }
//                     await sleep(1000);
//                 }
//                  SetCorrected(prev => [...prev, i]);
//             }   
//             await sleep(1000);
//             SetCorrected(prev => [...prev, 0]);
//             setActive([])
//         }
//         useEffect(()=>{
//             if(play===true){
//             sort()
//             }
//         },[play])
//         return(
//             <>
//             <div className="flex items-end">
//             {
//                 temp.map((val,index)=>{
//                     return(
//                         <div key={index} className={corrected.includes(index)?("w-8 bg-green-500 ml-2 rounded") : Active.includes(index)?("w-8 bg-red-500 ml-2 rounded"):Active[1]===val?("w-8 bg-blue-500 ml-2 rounded"):("w-8 bg-amber-600 ml-2 border-0 rounded ") } style={{height:3*val}}>{val}</div>
//                     )
//                 })
//             }
//             </div>
//             <button onClick={()=>setplay(true)}>Play</button>
//             </>
//         )
// }






// import { useState, useEffect } from "react";

// const arr = [50, 40, 30, 20, 10];

// const sleep = (ms) => {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// };

// export default function BubbleSort() {
//     const [temp, settemp] = useState(arr);
//     const [play, setplay] = useState(false);
//     const [Active, setActive] = useState([]);
//     const [corrected, SetCorrected] = useState([]);

//     const sort = async function () {
//         for (let i = arr.length - 1; i > 0; i--) {
//             for (let j = 0; j < i; j++) {
//                 setActive([j, j + 1]);
//                 if (arr[j] > arr[j + 1]) {
//                     let temp = arr[j + 1];
//                     arr[j + 1] = arr[j];
//                     arr[j] = temp;
//                     settemp([...arr]);
//                 }
//                 await sleep(500);
//             }
//             SetCorrected(prev => [...prev, i]);
//         }
//         await sleep(500);
//         SetCorrected(prev => [...prev, 0]);
//         setActive([]);
//     };

//     useEffect(() => {
//         if (play === true) {
//             sort();
//         }
//     }, [play]);

//     return (
//         <>
//             <div className="flex items-end gap-2 p-4 bg-gray-800 rounded-lg">
//                 {temp.map((val, index) => {
//                     return (
//                         <div
//                             key={index}
//                             className={`rounded-md transition-all duration-300 ${corrected.includes(index)
//                                 ? "bg-green-500"
//                                 : Active.includes(index)
//                                     ? "bg-red-500"
//                                     : "bg-blue-400"}`}
//                             style={{ height: 4 * val, width: 35 }}
//                         ></div>
//                     );
//                 })}
//             </div>
//             <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={() => setplay(true)}>Play</button>
//         </>
//     );
// }




import { useState, useEffect, useRef } from "react";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function BubbleSort({ array, Play, Pause, Reset }) {
    const [temp, setTemp] = useState([]);
    const [Active, setActive] = useState([]);
    const [corrected, setCorrected] = useState([]);
    const [swappingEle, setSwappingEle] = useState([]);
    const pauseRef = useRef(Pause);
    const resetRef = useRef(Reset);

    useEffect(() => {
        if (array.length > 0) {
            setTemp([...array]);
        } else {
            setTemp([50, 40, 30, 20, 10]); // Default array
        }
        setActive([]);
        setCorrected([]);
        setSwappingEle([]);
    }, [array, Reset]);

    useEffect(() => {
        pauseRef.current = Pause;
    }, [Pause]);

    useEffect(() => {
        resetRef.current = Reset;
        if (Reset) {
            setTemp([...array.length > 0 ? array : [50, 40, 30, 20, 10]]);
            setActive([]);
            setCorrected([]);
            setSwappingEle([]);
        }
    }, [Reset]);

    const sort = async function () {
        let arr = [...temp];

        for (let i = arr.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                while (pauseRef.current === true) {
                    await sleep(500);
                }
                if (resetRef.current) return; // Stop sorting if reset is clicked

                setActive([j, j + 1]);
                await sleep(1000);

                if (arr[j] > arr[j + 1]) {
                    setActive([]);
                    setSwappingEle([j, j + 1]);
                    await sleep(1000);

                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    setTemp([...arr]);
                    await sleep(1000);
                    setSwappingEle([]);
                } else {
                    setActive([]);
                    await sleep(1000);
                }
            }
            setCorrected((prev) => [...prev, i]);
        }
        setCorrected([...arr]);
        setActive([]);
    };

    useEffect(() => {
        if (Play) {
            sort();
        }
    }, [Play]);

    return (
        <>
            <div className="flex items-end">
                {temp.map((val, index) => (
                    <div
                        key={index}
                        className={
                            corrected.includes(val)
                                ? "w-8 bg-yellow-400 ml-2"
                                : Active.includes(index)
                                ? "w-8 bg-blue-600 ml-2"
                                : swappingEle.includes(index)
                                ? "w-8 bg-pink-600 ml-2"
                                : "w-8 bg-amber-600 ml-2"
                        }
                        style={{ height: `${Math.max(10, Math.min(4 * val, 400))}px` }}
                    >
                        {val}
                    </div>
                ))}
            </div>
        </>
    );
}
export function BubbleSortWithSteps(arr) {
    let tempArr = [...arr];
    let steps = [`Initial Array: ${tempArr}`];  

    for (let i = tempArr.length - 1; i > 0; i--) {
        steps.push(`\nPass ${tempArr.length - i}:`);  
        
        for (let j = 0; j < i; j++) {
            steps.push(`  Comparing ${tempArr[j]} and ${tempArr[j + 1]}`); 
            
            if (tempArr[j] > tempArr[j + 1]) {
                steps.push(`  Swapping ${tempArr[j]} and ${tempArr[j + 1]}`);  
                [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]]; 
            }
            steps.push(`  Array after comparison: ${tempArr}`); 
        }
    }

    steps.push(`\nSorted Array: ${tempArr}`);  
    return steps;  
}