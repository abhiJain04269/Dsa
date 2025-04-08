// import { useState } from "react"

// export default function Home() {
//     const [toggle,settoggle]=useState(false)
//     return (
//         <div className="bg-gray-900 min-h-screen">
//             <h1 className="text-5xl text-white text-center pt-10">Sorting Visualizer</h1>

//             <div className="pt-10 pb-10 w-[60%] mx-auto mt-20 flex items-center">
//                 <div className="w-[40%] mr-[10%] text-3xl text-white flex flex-col">
//                     <h1>Visualize Sorting Algorithms Like Never Before!</h1>
//                     <button className=" m-10 bg-red-300 mx-auto w-30 h-10 text-black rounded" onClick={()=>toggle===false?settoggle(true):settoggle(false)}>Sort</button>
//                 </div>
//                 <div className="w-[50%]">
//                     <img
//                         className="w-full h-[400px] object-cover rounded-xl shadow-lg"
//                         src="https://imgs.search.brave.com/JU54IGB64YKr5kwSA2mRO3-xajD09YG3wAgL5W6q2oE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYW1m/by11bmIuZ2l0aHVi/LmlvL2ltZy9Tb3J0/aW5nLWFsZ29yaXRo/bXMvU29ydGluZ19o/ZWFwc29ydF9hbmlt/LmdpZg.gif"
//                         alt="Sorting Animation"
//                     />
//                 </div>
//             </div>

//             <div className={`pt-10 pb-10 w-[80%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white ${toggle===false?"hidden":""}`}>
//                 {[
//                     { name: "Bubble Sort", img: "https://imgs.search.brave.com/dnI-1Jps95OQHlN-rSFAqqq2ISrSaT9kfM2uu3mPtRw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb3Ru/ZXR0cmlja3NjbG91/ZC5ibG9iLmNvcmUu/d2luZG93cy5uZXQv/YXJ0aWNsZS8zNzIw/MjQwNjA2MTQzODA5/LnBuZw" },
//                     { name: "Insertion Sort", img: "https://imgs.search.brave.com/6tbxyLGdusAa1jo-bCu6ipi_TMkpH3fNjh0aRZ0wRtc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXZ0/dXRvci5jb20vcmVz/b3VyY2VzL2ltYWdl/cy91cGxvYWRzL0J1/YmJsZV9Tb3J0X0Nw/cC5wbmc" },
//                     { name: "Selection Sort", img: "https://imgs.search.brave.com/RJfwiXMh4jo7czyUV41QoB-Ln08ujKTBWSjzXCrShAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb3Ru/ZXR0cmlja3NjbG91/ZC5ibG9iLmNvcmUu/d2luZG93cy5uZXQv/YXJ0aWNsZS8zNzIw/MjQwNjA2MTYwODA0/LnBuZw" },
//                     { name: "Merge Sort", img: "https://imgs.search.brave.com/yH4xEu3HaUTY-FqYo7HrWzdnIOmknBzqtc8xNv0fCOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXN1/YWxnby5uZXQvaW1n/L21lcmdlLnBuZw" }
//                 ].map((algo, index) => (
//                     <div key={index} className="flex flex-col items-center">
//                         <h2 className="text-2xl mb-2">{algo.name}</h2>
//                         <img
//                             className="w-[250px] h-[250px] object-cover rounded-lg shadow-md"
//                             src={algo.img}
//                             alt={`${algo.name} Visualization`}
//                         />
//                     </div>
//                 ))}
//             </div>

//             <div className="w-[70%] mx-auto text-white pt-5">
//                 <h1 className="text-4xl">Welcome to Sorting Visualizer</h1>

//                 <p className="text-2xl mt-4">
//                 Sorting is a fundamental concept in computer science used to arrange data in a particular order
//                 , typically ascending or descending. It plays a crucial role in searching, data analysis, and optimizing algorithms.

//                 Types of Sorting Algorithms

//                 🔹 Comparison-Based Sorting: These algorithms compare elements to determine their order.
//                     •	Merge Sort: A divide-and-conquer algorithm that recursively splits the array and merges sorted subarrays.
//                     •	Quick Sort: Uses partitioning to sort elements efficiently.
//                     •	Bubble Sort: A simple but slow algorithm that repeatedly swaps adjacent elements.
//                     •	Insertion Sort: Builds the sorted array one element at a time.
//                     •	Selection Sort: Repeatedly selects the smallest element and places it in order.

//                 🔹 Non-Comparison Sorting: These algorithms do not rely on direct comparisons.
//                     •	Counting Sort: Sorts numbers within a fixed range using frequency counting.
//                     •	Radix Sort: Sorts numbers digit by digit from least to most significant.
//                     •	Bucket Sort: Distributes elements into buckets and sorts them individually.
//             </p>
//             </div>
//         </div>
//     );
// }

import { useState } from "react";
import Header from "../header/Header";
import { Link } from "react-router";
import { ReactTyped } from "react-typed";
import HomePageGif from "./gif"

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Header></Header>
      <div className="bg-gray-900  py-10">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="fixed w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="fixed w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
        </div>
        <div className="pt-10 pb-10 w-[60%] mx-auto mt-50 flex items-center z-10">
          <div className="w-[40%] mr-[10%] mt-20 text-3xl text-white flex flex-col z-11 justify-items-start align-baseline">
            <div className="h-20 mb-15 w-[72%]">
              <ReactTyped
                strings={["Visualize Sorting Algorithms Like Never Before!"]}
                typeSpeed={60}
                backSpeed={30}
                loop
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
              />
            </div>
            <button
              className="w-[80%] p-3 text-lg font-semibold text-black bg-red-400 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:scale-105 active:scale-95"
              onClick={() => setToggle(!toggle)}
            >
              Explore Sorting Algorithms
            </button>
          </div>
          <div className="w-[50%] pl-20">
            <div className="bg-white rounded-3xl border border-white p-10"><HomePageGif></HomePageGif></div>
          </div>
        </div>

        <div
          className={` z-10 pt-10 pb-10 w-[80%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white transition-all duration-500 ${
            toggle ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
          }`}
        >
          {[
            {
              name: "BubbleSort",
              img: "https://imgs.search.brave.com/dnI-1Jps95OQHlN-rSFAqqq2ISrSaT9kfM2uu3mPtRw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb3Ru/ZXR0cmlja3NjbG91/ZC5ibG9iLmNvcmUu/d2luZG93cy5uZXQv/YXJ0aWNsZS8zNzIw/MjQwNjA2MTQzODA5/LnBuZw",
              routingpath: "bubble",
            },
            {
              name: "InsertionSort",
              img: "https://imgs.search.brave.com/6tbxyLGdusAa1jo-bCu6ipi_TMkpH3fNjh0aRZ0wRtc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXZ0/dXRvci5jb20vcmVz/b3VyY2VzL2ltYWdl/cy91cGxvYWRzL0J1/YmJsZV9Tb3J0X0Nw/cC5wbmc",
              routingpath: "insertion",
            },
            {
              name: "SelectionSort",
              img: "https://imgs.search.brave.com/RJfwiXMh4jo7czyUV41QoB-Ln08ujKTBWSjzXCrShAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb3Ru/ZXR0cmlja3NjbG91/ZC5ibG9iLmNvcmUu/d2luZG93cy5uZXQv/YXJ0aWNsZS8zNzIw/MjQwNjA2MTYwODA0/LnBuZw",
              routingpath: "selection",
            },
            {
              name: "MergeSort",
              img: "https://imgs.search.brave.com/yH4xEu3HaUTY-FqYo7HrWzdnIOmknBzqtc8xNv0fCOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXN1/YWxnby5uZXQvaW1n/L21lcmdlLnBuZw",
              routingpath: "merge",
            },
          ].map((algo, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link to={`/${algo.routingpath}`} state={{ algoname: algo.name }}>
                <div>
                  <h2 className="text-2xl mb-4">{algo.name}</h2>
                  <img
                    className="max-w-full h-auto object-cover rounded-lg shadow-md"
                    src={algo.img}
                    alt={`${algo.name} Visualization`}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="w-[70%] mx-auto text-white pt-10 pb-10 space-y-8 z-10 mt-30">
          <h1 className="text-4xl text-center">
            Welcome to Sorting Visualizer
          </h1>
          <p className="text-2xl leading-relaxed">
            Sorting is a fundamental concept in computer science used to arrange
            data in a particular order, typically ascending or descending. It
            plays a crucial role in searching, data analysis, and optimizing
            algorithms.
          </p>

          <h2 className="text-3xl">Example of Sorting</h2>
          <p className="text-2xl">Given an unsorted list of numbers:</p>
          <p className="text-xl bg-gray-700 p-4 rounded-lg">[5, 2, 8, 3, 1]</p>
          <p className="text-2xl">After sorting in ascending order:</p>
          <p className="text-xl bg-green-700 p-4 rounded-lg">[1, 2, 3, 5, 8]</p>

          <h2 className="text-3xl">Types of Sorting Algorithms</h2>
          <h3 className="text-2xl mt-6">Comparison-Based Sorting</h3>
          <ul className="list-disc list-inside text-xl space-y-2">
            <li>
              <strong>Merge Sort:</strong> A divide-and-conquer algorithm that
              recursively splits the array and merges sorted subarrays.
            </li>
            <li>
              <strong>Quick Sort:</strong> Uses partitioning to sort elements
              efficiently.
            </li>
            <li>
              <strong>Bubble Sort:</strong> A simple but slow algorithm that
              repeatedly swaps adjacent elements.
            </li>
            <li>
              <strong>Insertion Sort:</strong> Builds the sorted array one
              element at a time.
            </li>
            <li>
              <strong>Selection Sort:</strong> Repeatedly selects the smallest
              element and places it in order.
            </li>
          </ul>

          <h3 className="text-2xl mt-6">Non-Comparison Sorting</h3>
          <ul className="list-disc list-inside text-xl space-y-2">
            <li>
              <strong>Counting Sort:</strong> Sorts numbers within a fixed range
              using frequency counting.
            </li>
            <li>
              <strong>Radix Sort:</strong> Sorts numbers digit by digit from
              least to most significant.
            </li>
            <li>
              <strong>Bucket Sort:</strong> Distributes elements into buckets
              and sorts them individually.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}






// import { useState } from "react";
// import { Link } from "react-router";
// import { ReactTyped } from "react-typed";

// export default function Home() {
//   const [inputNumbers, setInputNumbers] = useState("");
//   const [sortedNumbers, setSortedNumbers] = useState([]);

//   const handleSort = () => {
//     const numArray = inputNumbers
//       .split(",")
//       .map((num) => parseInt(num.trim(), 10))
//       .filter((num) => !isNaN(num));
//     setSortedNumbers([...numArray].sort((a, b) => a - b));
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       {/* Hero Section */}
//       <div className="text-center py-20">
//         <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//           Sorting Visualizer
//         </h1>
//         <ReactTyped
//           strings={["Visualize Sorting Like Never Before!", "Learn Sorting Algorithms Interactively!"]}
//           typeSpeed={60}
//           backSpeed={30}
//           loop
//           className="text-xl mt-4 text-gray-300"
//         />
//       </div>

//       {/* Sorting Playground */}
//       <div className="text-center bg-gray-800 p-10 rounded-lg shadow-lg mx-auto w-3/4">
//         <h2 className="text-2xl font-semibold">Try Sorting Yourself!</h2>
//         <input
//           type="text"
//           placeholder="Enter numbers (e.g., 8, 3, 5, 1, 9)"
//           className="p-3 mt-4 w-3/4 text-black rounded-lg"
//           value={inputNumbers}
//           onChange={(e) => setInputNumbers(e.target.value)}
//         />
//         <button
//           className="ml-4 bg-blue-500 p-3 rounded-lg hover:bg-blue-600"
//           onClick={handleSort}
//         >
//           Sort Now
//         </button>
//         {sortedNumbers.length > 0 && (
//           <p className="mt-4 text-lg">Sorted: {sortedNumbers.join(", ")}</p>
//         )}
//       </div>

//       {/* Sorting Algorithm Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
//         {[
//           { name: "Bubble Sort", path: "bubble" },
//           { name: "Insertion Sort", path: "insertion" },
//           { name: "Selection Sort", path: "selection" },
//           { name: "Merge Sort", path: "merge" },
//         ].map((algo, index) => (
//           <Link
//             key={index}
//             to={`/${algo.path}`}
//             className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition"
//           >
//             <h3 className="text-xl font-semibold">{algo.name}</h3>
//           </Link>
//         ))}
//       </div>

//       {/* Comparison Table */}
//       <div className="w-3/4 mx-auto p-10">
//         <h2 className="text-3xl font-semibold text-center">Algorithm Comparison</h2>
//         <table className="w-full mt-6 border border-gray-700">
//           <thead>
//             <tr className="bg-gray-700">
//               <th className="p-2">Algorithm</th>
//               <th className="p-2">Best Case</th>
//               <th className="p-2">Worst Case</th>
//               <th className="p-2">Stable?</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="text-center border border-gray-700">
//               <td className="p-2">Bubble Sort</td>
//               <td>O(n)</td>
//               <td>O(n²)</td>
//               <td>✅ Yes</td>
//             </tr>
//             <tr className="text-center border border-gray-700">
//               <td className="p-2">Merge Sort</td>
//               <td>O(n log n)</td>
//               <td>O(n log n)</td>
//               <td>✅ Yes</td>
//             </tr>
//             <tr className="text-center border border-gray-700">
//               <td className="p-2">Quick Sort</td>
//               <td>O(n log n)</td>
//               <td>O(n²)</td>
//               <td>❌ No</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Video Tutorials */}
//       <div className="w-3/4 mx-auto p-10">
//         <h2 className="text-3xl font-semibold text-center">Learn Sorting Visually</h2>
//         <iframe
//           className="w-full h-64 rounded-lg mt-4"
//           src="https://www.youtube.com/embed/kPRA0W1kECg"
//           title="Sorting Algorithm Explanation"
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Real-World Applications */}
//       <div className="w-3/4 mx-auto p-10">
//         <h2 className="text-3xl font-semibold text-center">Real-World Applications of Sorting</h2>
//         <ul className="list-disc text-lg mt-4">
//           <li>📌 **Google Search** - Sorting search results efficiently.</li>
//           <li>🛒 **E-commerce** - Sorting products by price, rating, etc.</li>
//           <li>📈 **Stock Market** - Sorting stock prices dynamically.</li>
//         </ul>
//       </div>
//     </div>
//   );
// }
