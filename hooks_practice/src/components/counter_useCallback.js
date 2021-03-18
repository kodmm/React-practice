import React, { useState, useCallback } from 'react';

// const Button = React.memo(({ counterState, buttonValue }) => {
//     console.log("Button child component:", buttonValue);
//     return <button onClick={counterState}>{buttonValue} </button>;
// });

// const Counter_useCallback = () => {
//     const [CountStateA, setCounterStateA] = useState(0);
//     const [CountStateB, setCounterStateB] = useState(0);

//     const incrementAcounter = () => setCounterStateA(CountStateA + 1);
//     const incrementBcounter = () => setCounterStateB(CountStateB + 1);

//     return(
//         <div>
//             <p>Aボタン: {CountStateA}</p>
//             <p>Bボタン: {CountStateB}</p>
//             <Button counterState={incrementAcounter} buttonValue="Aボタン" />
//             <Button counterState={incrementBcounter} buttonValue="Bボタン" />
//         </div>
//     )
// }



const Button = React.memo(({ counterState, buttonValue}) => {
    console.log("Button child component:", buttonValue);
    return <button onClick={counterState}>{buttonValue}</button>
})

const Counter_useCallback = () => {
    const [CountStateA, setCountStateA] = useState(0);
    const [CountStateB, setCountStateB] = useState(0);

    const incrementACounter = useCallback(() => setCountStateA(CountStateA + 1),[CountStateA]);

    const incrementBCounter = useCallback(() => setCountStateB(CountStateB + 1), [CountStateB]);

    return(
        <div>
            <p>A ボタン: {CountStateA}</p>
            <p>B ボタン: {CountStateB}</p>
            <Button counterState={incrementACounter} buttonValue="Aボタン" />
            <Button counterState={incrementBCounter} buttonValue="Bボタン" />
        </div>
    ) 
}

export default Counter_useCallback;