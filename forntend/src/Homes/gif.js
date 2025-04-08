import { useState, useEffect, useRef } from "react";
import BubbleSort from "../algorithms/sorting/BubbleSort";

export default function HomePageGif() {
    const play = useRef(false);
    const reset = useRef(false);
    const [trigger, setTrigger] = useState(false);  // Used to force re-render

    useEffect(() => {
        let intervalId;  // Declare intervalId here
        let ms = 1000;  // Set the initial delay to 15000ms

        const updateInterval = () => {
            clearInterval(intervalId);  // Clear the previous interval
            intervalId = setInterval(() => {
                if (play.current === false) {
                    play.current = true;
                    reset.current = false;
                    console.log("playing");
                    ms = 30000;  // Set delay back to 15 seconds when playing
                } else {
                    reset.current = true;
                    play.current = false;
                    console.log("stopped");
                    ms = 2000;  // Set delay to 2 seconds when stopped
                }

                // Force re-render to pass updated ref values to BubbleSort
                setTrigger(prev => !prev); 
                updateInterval();  // Update the interval after each change
            }, ms);
        };

        updateInterval();  // Initialize the first interval

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);  // Run this only once after the initial render

    return (
        <BubbleSort 
            array={[10,20,30,40,50, 40, 30, 20, 10]} 
            Play={play.current} 
            Pause={false} 
            Reset={reset.current} 
        />
    );
}