import React, { useState, useEffect } from 'react';

const Effect_hooks = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({
        lastName: '',
        firstName: ''
    })

    useEffect(() => {  //第二引数に配列を渡して特定の値が変わった時だけ再レンダーさせる。[]だけの場合は初回のマウント時だけ実行される。
        document.title = `You clicked ${count} times`;
        console.log("updated")
    }, [count]);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setCount(0)}>
                リセット
            </button>
            <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
            <form>
                <input 
                    type="text"
                    placeholder="姓"
                    value={name.lastName}
                    onChange={(e) => setName({...name, lastName: e.target.value})} 
                />
                <input 
                    type="text"
                    placeholder="名"
                    value={name.firstName}
                    onChange={(e) => setName({...name, firstName: e.target.value})} 
                />
            </form>
        </div>
        
    )
}

export default Effect_hooks