import { use, useEffect, useState } from "react";
import BubbleSort from "../algorithms/sorting/BubbleSort";
import InsertionSort from "../algorithms/sorting/Insertionsort";
import MergeSort from "../algorithms/sorting/MergeSort";
import SelectionSort from "../algorithms/sorting/SelectionSort";

export default function SortingHandle({ Algo }) {
  const [arr, setarr] = useState("");
  const [Array, Setarray] = useState([]);
  const [SelectedComponent, setSelectedComponent] = useState(null);
  const [play, setplay] = useState(false);
  const [pause,setpause] =useState(false);
  const [Status,Setstatus]=useState("Play");
  const [reset,Setreset]=useState(false)

  const algorithmComponents = {
    BubbleSort: BubbleSort, 
    InsertionSort: InsertionSort,
    MergeSort: MergeSort, 
    SelectionSort: SelectionSort, 
  };

  useEffect(() => {

    const AlgoComponent = algorithmComponents[Algo];

    if (!AlgoComponent) {
      console.error("Invalid algorithm selected");
      return;
    }
    setSelectedComponent(<AlgoComponent array={Array} Play={play} Pause={pause} Reset={reset}/>);
  }, [play,pause, Array,reset]);

  function StrtoArr() {
    let temp = [];
    let number = "";
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] != ",") number = number + arr[i];
        else {
          temp.push(parseInt(number));
          number = "";
        }
      }
      temp.push(parseInt(number));
      Setarray(temp);
    } else {
      Setarray([]);
    }
    console.log(temp);
  }

  function controlPlay(){
    if(play===false){
        setplay(true);
        Setstatus("Pause")
    }
    else if(play===true & pause===false){
        setpause(true);
        Setstatus("Resume")
    }
    else if(play===true & pause===true){
        setpause(false);
        Setstatus("Pause")
    }
  }

  function ControlReset() {
    setplay(false);
    setpause(false);
    Setreset(true);

    Setarray(Array);

    Setstatus("Play");

    setTimeout(() => {
        Setreset(false);
        setSelectedComponent(null);
    }, 100);
}

  return (
    <div className="flex justify-center items-center relative w-full pt-10">
  <div className="left-0 top-[45%] fixed w-[300px] bg-gray-800 text-white flex flex-col p-4 m-6 rounded-2xl shadow-lg">
    <input
      className="bg-gray-700 text-white p-2 rounded-md border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
      type="text"
      placeholder="Enter array (e.g. 4,2,7,1)"
      onChange={(e) => setarr(e.target.value)}
      value={arr}
    />
    <button
      className="mt-5 mb-5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded h-10 transition-all"
      onClick={() => StrtoArr()}
    >
      Generate Array
    </button>
    <div className="flex justify-between">
      <button
        className="w-[45%] bg-green-500 hover:bg-green-600 text-white font-semibold rounded h-10 transition-all"
        onClick={() => controlPlay()}
      >
        {Status}
      </button>
      <button
        className="w-[45%] bg-red-500 hover:bg-red-600 text-white font-semibold rounded h-10 transition-all"
        onClick={() => ControlReset()}
      >
        Reset
      </button>
    </div>
  </div>
  <div className="">{SelectedComponent}</div>
</div>
  );
}
