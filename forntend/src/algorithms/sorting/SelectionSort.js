// import { useState,useEffect } from "react";

// const arr=[50,40,30,20,10];

// const sleep=(ms)=>{
//     return new Promise((resolve)=>setTimeout(resolve,ms));
// }

// export default function SelectionSort(){
//         const [temp,settemp]=useState(arr);
//         const [play,setplay]=useState(false);
//         const [Active,setActive]=useState([]);
//         const [corrected,SetCorrected]=useState([]);
//         const [swappingele,SetSwappingele]=useState([]);
//         const sort= async function(){
//             for(let j=0;j<arr.length-1;j++){
//                 let index=j;
//                 for( let i=j+1;i<arr.length;i++){
                    
//                     setActive([j,i]);
//                     if(arr[i]<arr[index]){
//                         index=i;
//                     }
//                     await sleep(1000);
//                 }
//                 setActive([]);
//                 if (index !== j) {

//                     SetSwappingele([j, index]);
//                     await sleep(1000);
//                     [arr[j], arr[index]] = [arr[index], arr[j]];
//                     settemp([...arr]);
//                     await sleep(1000);
//                     SetSwappingele([]);

//                 }
//                 SetCorrected(prev => [...prev, arr[j]]);
//                 await sleep(1000);
                
//             }
//             SetCorrected(prev => [...prev, arr[arr.length-1]]);
//             await sleep(1000);
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
//                         <div key={index} className={corrected.includes(val)?("w-8 bg-yellow-400 ml-2") : Active.includes(index)?("w-8 bg-blue-600 ml-2"): swappingele.includes(index)?("w-8 bg-pink-600 ml-2"):("w-8 bg-amber-600 ml-2") } style={{height:3*val}}>{val}</div>
//                     )
//                 })
//             }
//             </div>
//             <button onClick={()=>setplay(true)}>Play</button>
//             </>
//         )
// }


// for(let j=0;j<arr.length-1;j++){
//     index=j;
//     for( let i=j+1;i<arr.length;i++){
//         setActive([arr[i],arr[j]]);
//         if(arr[i]<arr[j]){
//             index=i;
//         }
//     }
//     let temp1=arr[index];
//     arr[index]=arr[j];
//     arr[j]=temp1;
//     settemp([...arr]);
//     await sleep(300);
//     SetCorrected(prev => [...prev, arr[j]]);
// }

// console.log(arr)





import { useState, useEffect, useRef } from "react";

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export default function SelectionSort({ array, Play, Pause, Reset }) {
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
            setTemp([50, 40, 30, 20, 10]);  // Default array if no array is provided
        }
        setActive([]);
        setCorrected([]);
        setSwappingEle([]);
    }, [array, Reset]);

    useEffect(() => {
        pauseRef.current = Pause;  // Track pause state
    }, [Pause]);

    useEffect(() => {
        resetRef.current = Reset;  // Track reset state
        if (Reset) {
            setTemp([...array.length > 0 ? array : [50, 40, 30, 20, 10]]);
            setActive([]);
            setCorrected([]);
            setSwappingEle([]);
        }
    }, [Reset]);

    const sort = async function () {
        const arr = [...temp]; // Local copy of array for sorting
        for (let j = 0; j < arr.length - 1; j++) {
            let index = j;
            for (let i = j + 1; i < arr.length; i++) {
                setActive([j, i]);
                while (pauseRef.current === true) {
                    await sleep(500);  // Wait if paused
                }

                if (resetRef.current) return;  // Stop sorting if reset is clicked

                if (arr[i] < arr[index]) {
                    index = i;
                }
                await sleep(1000);
            }

            setActive([]);
            if (index !== j) {
                setSwappingEle([j, index]);
                await sleep(1000);
                [arr[j], arr[index]] = [arr[index], arr[j]];
                setTemp([...arr]);
                await sleep(1000);
                setSwappingEle([]);
            }

            setCorrected((prev) => [...prev, arr[j]]);
            await sleep(1000);
        }

        setCorrected((prev) => [...prev, arr[arr.length - 1]]);
        await sleep(1000);
        setActive([]);
    };

    useEffect(() => {
        if (Play) {
            sort();  // Start sorting when play is true
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

export function SelectionSortWithSteps(arr) {
    let tempArr = [...arr];
    let steps = [`Initial Array: ${tempArr}`];

    for (let i = 0; i < tempArr.length - 1; i++) {
        let minIndex = i;
        steps.push(`\nPass ${i + 1}:`);  
        
        for (let j = i + 1; j < tempArr.length; j++) {
            steps.push(`  Comparing ${tempArr[j]} and ${tempArr[minIndex]}`);
            if (tempArr[j] < tempArr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            steps.push(`  Swapping ${tempArr[i]} and ${tempArr[minIndex]}`);
            [tempArr[i], tempArr[minIndex]] = [tempArr[minIndex], tempArr[i]];  
        }
        
        steps.push(`  Array after pass ${i + 1}: ${tempArr}`);
    }

    steps.push(`\nSorted Array: ${tempArr}`);
    return steps;
}