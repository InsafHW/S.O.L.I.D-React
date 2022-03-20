import {useEffect, useState} from 'react'

const USER_URL = 'https://jsonplaceholder.typicode.com/users'

function UserList_Wrong_D() {
    const [users, setUsers] = useState([])

    // привязаны к fetch, если нужно будет заменить fetch на axios, придется переписать каждый компонент
    useEffect(() => {
        fetch(USER_URL)
            .then(r => r.json())
            .then(setUsers)
    }, [])

    return (
        <>
            <h2>Список пользователей</h2>
            {
                users.map(u => (
                    <div key={u.id} id={u.id}>{u.name}</div>
                ))
            }
        </>
    )
}

export {
    UserList_Wrong_D
}
