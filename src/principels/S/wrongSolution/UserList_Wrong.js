import {useEffect, useReducer, useState} from 'react'

const initialState = {
    isLoading: true
}

// COMPLEX STATE MANAGEMENT
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {isLoading: true}
        case 'FINISHED':
            return {isLoading: false}
        default:
            return state
    }
}

function UserList_Wrong() {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState)

    const showDetails = (userId) => {
        const user = filteredUsers.find(user => user.id === userId)
        alert(user.contact)
    }

    // REMOTE DATA FETCHING
    useEffect(() => {
        dispatch({type: 'LOADING'})
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch({type: 'FINISHED'})
                setUsers(json)
            })
    }, [])

    // PROCESSING DATA
    useEffect(() => {
        const filteredUsers = users.map(user => {
            return {
                id: user.id,
                name: user.name,
                contact: `${user.phone} , ${user.email}`
            }
        })
        setFilteredUsers(filteredUsers)
    }, [users])

    // COMPLEX UI RENDERING
    return (
        <>
            <div> Users List</div>
            <div> Loading state: {state.isLoading ? 'Loading' : 'Success'}</div>
            {filteredUsers.map(user => (
                    <div style={{display: 'flex'}} key={user.id} onClick={() => showDetails(user.id)}>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    </div>
                )
            )}
        </>
    )
}

export {
    UserList_Wrong
}

/*
 *  Что делает компонента?
 *  1) Запрашивает данные с API (1-й effect)
 *  2) Фильтрует данные (2-й effect)
 *  3) Организует сложную логику состояний (reducer)
 *  4) Отвечает за сложный UI
 */
