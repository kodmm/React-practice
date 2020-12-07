import React, { useContext } from 'react';
//useContextコンポーネントからUseContext, HobbyContextをインポート
import {UserContext, HobbyContext } from '../useContext'

const ContextC = () => {
    /*
    //useContextの引数に、UserContextやHobbyContextを渡すことにより、
    //useContextコンポーネントでProviderに渡したvalueの値を変数に代入することができる
    const user = useContext(UserContext)
    const hobby = useContext(HobbyContext)
    
    return(
        <p>{user.name}{user.age}歳：　趣味は{hobby}です。</p>

    )

    */
   return(
       <>
        <UserContext.Consumer>
            {
                user => {
                    return(
                        <HobbyContext.Consumer>
                            {hobby => <p>{user.name}({user.age}歳): 趣味: {hobby}</p> }
                        </HobbyContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
       </>
   )

}

export default ContextC
