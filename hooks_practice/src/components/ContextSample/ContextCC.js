import React from 'react'
import {UserContext, HobbyContext} from '../../App'

const ContextCC = () => {
    return(
        <div>
            <br />
            <hr />
            <h3>Consumer使用ver</h3>
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <HobbyContext.Consumer>
                            { hobby => <p>{user.name}({user.age}歳): 趣味:{hobby}</p> }
                            </HobbyContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ContextCC