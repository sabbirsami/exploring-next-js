"use client";

import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2 className="">number: {counter}</h2>
            <div className="space-x-3">
                {" "}
                <button
                    className="p-5 border"
                    onClick={() => setCounter(counter + 1)}
                >
                    +
                </button>
                <button
                    className="p-5 border"
                    onClick={() => setCounter(counter - 1)}
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default Counter;
