import {useEffect, useState} from 'react'

const USER_URL = 'https://jsonplaceholder.typicode.com/users'

function useFetch(url) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(setData)
    }, [url])

    return data
}

function UserList_Right_D() {
    const users = useFetch(USER_URL)

    return (
        <>
            <h2>Список пользователей</h2>
            {
                users && users.map(u => (
                    <div key={u.id} id={u.id}>{u.name}</div>
                ))
            }
        </>
    )
}

export {
    UserList_Right_D
}
