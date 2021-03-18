import React, { useState } from "react";

//Counterコンポーネント(子)
//親コンポーネントのボタンがクリックされて親コンポーネントのもつcountStateが更新されたらレンダリングされる
//textとcountStateのpropsをcountReactMemo(親)から受け取っているコンポーネントをReact.memoでラップ

const Count = React.memo(({ text, countState }) => {
  console.log("Coount child component:", text);
  return(
      <p>
          {text}:{countState}
      </p>
  );
});

const CounterReactMemo = () => {
    const [CountStateA, setCountStateA] = useState(0);
    const [CountStateB, setCountStateB] = useState(0);
    
    const incrementAcounter = () => setCountStateA(CountStateA + 1);

    const incrementBcounter = () => setCountStateB(CountStateB + 1);

    return(
        <div>
            <Count text="A ボタン" countState={CountStateA} />
            <Count text="B ボタン" countState={CountStateB} />
            <button onClick={incrementAcounter}>A Button</button>
            <button onClick={incrementBcounter}>B Button</button>
        </div>
    )
}

export default CounterReactMemo


