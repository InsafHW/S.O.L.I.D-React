import {UserDetails} from './UserDetails'
import {useGetUsers} from './useGetUsers'

function UserList_Right() {
    const {filteredUsers, isLoading} = useGetUsers()

    return (
        <>
            <div> Users List</div>
            <div> Loading state: {isLoading ? 'Loading' : 'Success'}</div>
            {filteredUsers.map(user => <UserDetails key={user.id} user={user}/>)}
        </>
    )
}

export {
    UserList_Right
}
