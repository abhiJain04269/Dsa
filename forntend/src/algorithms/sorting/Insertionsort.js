import { useState, useEffect, useRef } from "react";

let arr;

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export default function InsertionSort({ array, Play, Pause, Reset }) {
    const [temp, setTemp] = useState([]);
    const [Active, setActive] = useState([]);
    const [corrected, setCorrected] = useState([]);
    const [swappingEle, setSwappingEle] = useState([]);
    const pauseRef = useRef(Pause);
    const resetRef = useRef(Reset);

    useEffect(() => {
        if (array.length > 0) {
            arr = [...array];
        } else {
            arr = [50, 40, 30, 20, 10];
        }
        setTemp([...arr]);
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
            arr = [...array.length > 0 ? array : [50, 40, 30, 20, 10]];
            setTemp([...arr]);
            setActive([]);
            setCorrected([]);
            setSwappingEle([]);
        }
    }, [Reset]);

    const sort = async function () {
        for (let i = 1; i < arr.length; i++) {
            while (pauseRef.current === true) {
                await sleep(500);
            }
            for (let j = i; j > 0; j--) {
                while (pauseRef.current === true) {
                    await sleep(500);
                }
                if (resetRef.current) return; // Stop sorting if reset

                setActive([j, j - 1]);
                await sleep(1000);

                if (arr[j - 1] > arr[j]) {
                    setActive([]);
                    setSwappingEle([j - 1, j]);
                    await sleep(1000);

                    let temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;

                    setTemp([...arr]);
                    await sleep(1000);
                    setSwappingEle([]);
                } else {
                    setActive([]);
                    await sleep(1000);
                }
            }
        }
        setActive([]);
        setCorrected([...arr]);
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
export function InsertionSortWithSteps(arr) {
    let tempArr = [...arr];
    let steps = [`Initial Array: ${tempArr}`];

    for (let i = 1; i < tempArr.length; i++) {
        let current = tempArr[i];
        let j = i - 1;
        
        steps.push(`\nPass ${i}:`);
        
        while (j >= 0 && tempArr[j] > current) {
            steps.push(`  Shifting ${tempArr[j]} to the right`);
            tempArr[j + 1] = tempArr[j];
            j--;
        }
        
        steps.push(`  Placing ${current} at position ${j + 1}`);
        tempArr[j + 1] = current;
        
        steps.push(`  Array after pass ${i}: ${tempArr}`);
    }

    steps.push(`\nSorted Array: ${tempArr}`);
    return steps;
}