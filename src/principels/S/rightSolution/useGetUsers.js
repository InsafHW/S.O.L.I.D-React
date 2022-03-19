import {useEffect, useState} from 'react'
import {useHttpGetRequest} from './useHttpGetRequest'

const REMOTE_URL = 'https://jsonplaceholder.typicode.com/users'

const useGetUsers = () => {
    const {users, isLoading} = useHttpGetRequest(REMOTE_URL)
    const [filteredUsers, setFilteredUsers] = useState([])

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

    return {filteredUsers, isLoading}
}

export {
    useGetUsers
}
