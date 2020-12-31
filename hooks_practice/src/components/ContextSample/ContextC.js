//ReactからuseContextをimport
import React, {useContext} from 'react'
//AppコンポーネントからUseContext, HobbyContextをimport
import {UserContext, HobbyContext} from '../../App'
import ContextCC from './ContextCC'
const ContextC = () => {
    //useContextの引数に、UserContextやHobbyContextを渡すことにより、
    //AppコンポーネントでProviderに渡したvalueの値を変数に代入することができる。
    const user = useContext(UserContext)
    const hobby = useContext(HobbyContext)
    return(
        <div>
            <p>{user.name} {user.age}歳: 趣味は{hobby}です。</p>
            <ContextCC />   
        </div>
        
    )
}

export default ContextC

