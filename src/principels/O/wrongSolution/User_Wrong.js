import React from 'react'

function User_Wrong({
    user
}) {
    return (
        <>
            <div> Name: {user.name}</div>
            <div> Email: {user.email}</div>
            {
                user.type === 'SUPER_ADMIN' &&
                <div> Details about super admin</div>
            }
            {
                user.type === 'ADMIN' &&
                <div> Details about admin</div>
            }
        </>
    )
}

export {
    User_Wrong
}
