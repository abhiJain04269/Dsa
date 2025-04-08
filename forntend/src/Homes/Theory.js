import { useState } from "react";
import { InsertionSortWithSteps } from "../algorithms/sorting/Insertionsort";
import { BubbleSortWithSteps } from "../algorithms/sorting/BubbleSort";
import { MergeSortWithSteps } from "../algorithms/sorting/MergeSort";
import { SelectionSortWithSteps } from "../algorithms/sorting/SelectionSort";

export default function Theory({
  fetchTheory,
  working,
  algoname,
  TASC,
  Video,
}) {
  const [arr, setArr] = useState("");
  const [steps, setSteps] = useState([]);

  // Function to convert string to array
  function StrtoArr() {
    let temp = [];
    let number = "";
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ",") number = number + arr[i];
        else {
          temp.push(parseInt(number));
          number = "";
        }
      }
      temp.push(parseInt(number)); // Add last number
      return temp;
    } else {
      return [];
    }
  }

  // Object mapping algorithm names to functions
  const sortingFunctions = {
    BubbleSort: BubbleSortWithSteps,
    SelectionSort: SelectionSortWithSteps,
    InsertionSort: InsertionSortWithSteps,
    MergeSort: MergeSortWithSteps,
  };

  // Handle Submit Button click to call sorting function
  const handleSubmit = () => {
    const array = StrtoArr(); // Convert string to array
    const selectedSortFunction = sortingFunctions[algoname];

    if (selectedSortFunction) {
      const steps = selectedSortFunction(array);
      setSteps(steps); // Save the steps to state to display
    } else {
      setSteps(["Algorithm not found"]);
    }
  };

  return (
    <div className="w-[80%] mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-4 text-black">Theory</h2>
      <div className="text-black bg-gray-100 p-4 mb-4">
        <div className="border border-gray-300 p-4 ">
          <h1 className="text-2xl mb-2">Theory</h1>
          <pre className="text-lg bg-gray-100 p-4 rounded-lg overflow-x-auto text-black mb-4 whitespace-pre-wrap break-words">
            {fetchTheory}
          </pre>
        </div>
        <br />
      </div>
      <div className="text-black bg-gray-100 p-4 mb-4">
        <div className="border border-gray-300 p-4">
          <h1 className="text-2xl mb-2">Working</h1>
          <pre className="text-lg bg-gray-100 p-4 rounded-lg  overflow-x-auto text-black mb-4 whitespace-pre-wrap break-words">
            {working}
          </pre>
        </div>
      </div>
      <div className="text-black bg-gray-100 p-4 mb-4 ">
        <div className="border border-gray-300 p-4">
          <h1 className="text-2xl mb-4">Example of {algoname}</h1>
          <input
            className="bg-white text-black p-2 rounded-md border border-gray-300 placeholder-gray-500 mb-2"
            type="text"
            placeholder="Enter array (e.g. 4,2,7,1)"
            onChange={(e) => setArr(e.target.value)}
            value={arr}
          />
          <br />
          <button
            className="w-20 bg-gray-300 rounded-2xl p-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <div className="mt-4">
            <h2 className="text-xl font-bold">Steps:</h2>
            <pre className="text-lg bg-gray-100 p-4 rounded-lg border border-gray-300 overflow-x-auto text-black mb-4 ">
              {steps.join("\n")}
            </pre>
          </div>
        </div>
      </div>
      <div className="text-black bg-gray-100 p-4">
        <div className="border border-gray-300 p-4">
          <h1 className="text-2xl mb-4">
            Time And Space Complexity of {algoname}
          </h1>
          <pre className="p-4">{TASC}</pre>
        </div>
      </div>
      <div className="text-black bg-gray-100 p-4">
        <div className="border border-gray-300 p-4">
          <h1 className="text-2xl mb-4">Recommended Video</h1>
          <div className="flex justify-center items-center">
            <iframe
              width="500"
              height="315"
              src={`https://www.youtube.com/embed/${Video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
