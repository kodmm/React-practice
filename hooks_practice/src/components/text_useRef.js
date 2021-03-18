import React, {useState, useRef} from 'react';

const Text_useRef = () => {
    const inputEl = useRef(null);
    const inputEl2 = useRef(null);
    const [text, setText] = useState("")
    const handleClick = () => {
        setText(inputEl.current.value);
    };
    const handleClick2 = () => {
        inputEl2.current.focus();
        console.log("inputEl2.current:", inputEl2.current);
    }
    console.log("描画")
    return(
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={handleClick}>set text</button>
            <p>テキスト: {text}</p>
            <br />
            <input ref={inputEl2} type="text" />
            <button onClick={handleClick2}>入力エリアをフォーカスする</button>
        </div>
    )
}

export default Text_useRef