import React, { useState, useMemo } from "react";

const square = (parameter) => {
    console.log("square関数の実行観察");

    let i = 0;
    while (i < 20000000) i++
    return parameter * parameter 
};

const Counter_useMemo = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const resultA = () => {
        return setCountA(countA + 1);
    };

    const resultB = () => {
        return setCountB(countB + 1);
    }

    const squareArea = useMemo(() => square(countB), [countB]);
    
    return (
        <div>
            <p>
                計算結果A: {countA} <button onClick={resultA}>計算A + 1</button>
            </p>
            <h2>[正方形の面積]</h2>
            <p>
                計算結果B: {countB} <button onClick={resultB}>計算B + 1</button>
            </p>
            <p>計算結果B X 計算結果B = {squareArea}</p>

        </div>
    )
    
}

export default Counter_useMemo;