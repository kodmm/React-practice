import React, { createContext, useState} from 'react';
import Context from './ContextSample/ContextA';

//createContextを使ってUserContextとHobbyContextを作成
export const UserContext = createContext()
export const HobbyContext = createContext()

function useContext() {
    //useStateを使ってuserを作成
    const [user, setUser] = useState({
        name: 'Nissy',
        age: '32'
    })

    //useStateを使ってhobbyを作成
    const [hobby, setHobby] = useState('キャンプ')
    return(
        <div>
            //userContext。Providerを作成、valueにはuserをセット
            <UserContext.Provider value={user} >
                <HobbyContext.Provider value={hobby} >
                    <Context />
                </HobbyContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default useContext