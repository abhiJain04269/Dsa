// import { useState } from "react";

// export default function Merge_Sort() {
//     let arr = [50, 40, 30, 20, 10,50];

//     const [activeEle, setActive] = useState([]); 
//     const [steps, setSteps] = useState([[arr.slice()]]);
//     const [mergeele,setmerge] =useState([]);
//     const [goingmerge,setgoingmerge]=useState([]);

//     function delay(ms) {
//         return new Promise(resolve => setTimeout(resolve, ms));
//     }

//     async function merge(start, mid, end, arr) {
//         let temp = [];
//         let right = mid + 1;
//         let left = start;
//         let i = 0;

//         if(end-start !==1){
//         setSteps(prevSteps => [...prevSteps, [arr.slice(start,mid+1),arr.slice(mid+1,end+1)]]);

//         await delay(1000);
//         }

//         while (left <= mid && right <= end) {
//             if (arr[left] <= arr[right]) {
//                 temp[i] = arr[left];
//                 left++;
//             } else {
//                 temp[i] = arr[right];
//                 right++;
//             }
//             i++;
//         }

//         while (left <= mid) {
//             temp[i] = arr[left];
//             i++;
//             left++;
//         }
//         while (right <= end) {
//             temp[i] = arr[right];
//             right++;
//             i++;
//         }

//         i = 0;
//         for (let j = start; j <= end; j++) {
//             arr[j] = temp[i];
//             i++;
//         }

//         setSteps(prevSteps => [...prevSteps, [arr.slice(start,end+1)]]);
//         setSteps(prevSteps => [...prevSteps, [arr.slice()]]);
        
//         await delay(2000);
//     }

//     async function divide(start, end, arr) {
//         if (start >= end) return;

//         const mid = Math.floor(start + (end - start) / 2);

//         const temp = arr.slice(start, mid + 1);
//         const temp1 = arr.slice(mid + 1, end + 1);

//         setActive([temp,temp]);
//         setSteps(prevSteps => [...prevSteps, [temp, temp1]]);  
//         await delay(2000);

//         await divide(start, mid, arr);
//         await divide(mid + 1, end, arr);
//         await merge(start, mid, end, arr);
//     }

//     function Sort() {
//         divide(0, arr.length - 1, arr);
//     }

//     return (
//         <>
//             <div className="w-full flex flex-col items-center justify-center ml-0">
//                 {steps.map((step, index) => (
//                     <div key={index} className="flex p-2 m-2">
//                         {Array.isArray(step) ? (
//                             step.map((subArray, subIndex) => (
//                                 <div key={subIndex} 
//                                 className={`
//                                     flex gap-2 p-3 rounded-lg shadow-lg text-white text-xl font-bold
//                                         bg-orange-400 border border-white-700
//                                 `}>
//                                     {Array.isArray(subArray) ? (
//                                         subArray.map((num, i) => <div className="text-2xl"key={i}>{num}</div>)
//                                     ) : (
//                                         <div className="text-2xl">{subArray}</div>
//                                     )}
//                                 </div>
//                             ))
//                         ) : (
//                             <div className="text-2xl">{step}</div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <button onClick={Sort}>Play</button>
//         </>
//     );
// }


import { useState,useEffect,useRef } from "react";

let arr;
export default function MergeSort({ array, Play, Pause, Reset }) {

    const [activeEle, setActive] = useState([]); 
    const [steps, setSteps] = useState([[]]);
    const [mergeele, setMerge] = useState([]);
    const [goingMerge, setGoingMerge] = useState([]);
    const pauseRef = useRef(Pause);
    const resetRef = useRef(Reset);

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
            if (array.length > 0) {
                arr = [...array];
            } else {
                arr = [50, 40, 30, 20, 10];
            }
            
            setSteps([[arr.slice()]])
            setActive([]);
        }, [array, Reset]);

    useEffect(() => {
            pauseRef.current = Pause;
        }, [Pause]);
    
    useEffect(() => {
            resetRef.current = Reset;
            if (Reset) {
                arr = [...array.length > 0 ? array : [50, 40, 30, 20, 10]];
                setSteps([[]]);
                setMerge([]);
                setGoingMerge([]);
                setActive([]);
            }
    }, [Reset]);

    

    async function merge(start, mid, end, arr) {
        let temp = [];
        let right = mid + 1;
        let left = start;
        let i = 0;

        while (pauseRef.current === true) {
            await delay(500);
        };

        setGoingMerge([arr.slice(start, mid + 1), arr.slice(mid + 1, end + 1)]);

        while (pauseRef.current === true) {
            await delay(500);
        }
        await delay(1000);

        while (left <= mid && right <= end) {

            while (pauseRef.current === true) {
                await delay(500);
            };

            if (arr[left] <= arr[right]) {
                temp[i] = arr[left];
                left++;
            } else {
                temp[i] = arr[right];
                right++;
            }
            while (pauseRef.current === true) {
                await delay(500);
            };
            i++;
        }

        while (left <= mid) {

            while (pauseRef.current === true) {
                await delay(500);
            }

            temp[i] = arr[left];
            i++;
            left++;
        }
        while (right <= end) {

            while (pauseRef.current === true) {
                await delay(500);
            }

            temp[i] = arr[right];
            right++;
            i++;
        }

        i = 0;
        for (let j = start; j <= end; j++) {

            while (pauseRef.current === true) {
                await delay(500);
            }

            arr[j] = temp[i];
            i++;
        }

        while (pauseRef.current === true) {
            await delay(500);
        }
        setSteps(prevSteps => [...prevSteps, [arr.slice(start, end + 1)]]);

        while (pauseRef.current === true) {
            await delay(500);
        }
        setMerge([arr.slice(start, end + 1)]);
        await delay(2000);
    }

    async function divide(start, end, arr) {
        if (start >= end) return;

        while (pauseRef.current === true) {
            await delay(500);
        }

        const mid = Math.floor(start + (end - start) / 2);
        const temp = arr.slice(start, mid + 1);
        const temp1 = arr.slice(mid + 1, end + 1);

        while (pauseRef.current === true) {
            await delay(500);
        }

        setActive([temp, temp1]);
        setSteps(prevSteps => [...prevSteps, [temp, temp1]]);
        await delay(2000);

        while (pauseRef.current === true) {
            await delay(500);
        }

        await divide(start, mid, arr);

        while (pauseRef.current === true) {
            await delay(500);
        }

        await divide(mid + 1, end, arr);

        while (pauseRef.current === true) {
            await delay(500);
        }

        await merge(start, mid, end, arr);

        while (pauseRef.current === true) {
            await delay(500);
        }

        setActive([]);
    }

    function Sort() {
        divide(0, arr.length - 1, arr);
    }
    useEffect(() => {
        if (Play) {
            Sort();
        }
    }, [Play]);

    return (
        <>
            <div className="w-full flex flex-col items-center justify-center ml-0">
                {steps.map((step, index) => (
                    <div key={index} className="flex p-2 m-2">
                        {Array.isArray(step) ? (
                            step.map((subArray, subIndex) => (
                                <div key={subIndex} 
                                    className={`
                                        flex gap-2 p-3 rounded-lg shadow-lg text-white text-xl font-bold
                                        ${goingMerge.some(ele => JSON.stringify(ele) === JSON.stringify(subArray))
                                            ? "bg-red-500 border border-white-700"
                                            : activeEle.some(ele => JSON.stringify(ele) === JSON.stringify(subArray))
                                            ? "bg-blue-500 border border-white-700"
                                            : mergeele.some(ele => JSON.stringify(ele) === JSON.stringify(subArray))
                                            ? "bg-green-500 border border-white-700"
                                            : "bg-orange-400 border border-white-700"}
                                    `}>
                                    {Array.isArray(subArray) ? (
                                        subArray.map((num, i) => <div className="text-2xl" key={i}>{num}</div>)
                                    ) : (
                                        <div className="text-2xl">{subArray}</div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-2xl">{step}</div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export function MergeSortWithSteps(arr) {
    let steps = [`Initial Array: ${arr}`];

    const merge = (left, right) => {
        let result = [], i = 0, j = 0;

        // Merging two sorted arrays
        while (i < left.length && j < right.length) {
            steps.push(`  Comparing ${left[i]} and ${right[j]}`);
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        // Add remaining elements from left or right
        steps.push(`  Merged result: ${[...result, ...left.slice(i), ...right.slice(j)]}`);
        return [...result, ...left.slice(i), ...right.slice(j)];
    };

    const mergeSort = (array) => {
        if (array.length <= 1) return array;

        let mid = Math.floor(array.length / 2);
        let left = array.slice(0, mid);
        let right = array.slice(mid);

        steps.push(`  Splitting array: ${array} into left: ${left} and right: ${right}`);

        left = mergeSort(left);  
        right = mergeSort(right); 

        steps.push(`  Merging left: ${left} and right: ${right}`);
        return merge(left, right);  
    };

    let sortedArray = mergeSort(arr);
    steps.push(`\nSorted Array: ${sortedArray}`);

    return steps;
}