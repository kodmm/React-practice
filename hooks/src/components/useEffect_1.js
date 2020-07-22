import React, {useState, useEffect} from 'react'


const EffectFunc = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState({
        lastName: '',
        firstName: ''
    })

    useEffect(() => {
        document.title = `${count}回クリックされました。`
        console.log(`再レンダーされました`)
    }, [])

    return(
        <>
            <p>{`${count}回クリックされました`}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>
                ボタン
            </button>
            <button onClick={() => setCount(0)}>
                リセット
            </button>
            <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
            <form>
                <input 
                    placeholder="姓"
                    value={name.lastname}
                    onChange ={(e) => {setName({ ...name, lastName: e.target.value})}}
                />
                <input 
                    placeholder="名"
                    value={name.firstName}
                    onChange = {(e) => {setName({ ...name, firstName: e.target.value})}}
                />
            </form>
        </>
    )
}

export default EffectFunc
