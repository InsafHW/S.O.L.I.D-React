import React from 'react'

function User({
    user
}) {
    return (
        <>
            <div> Name: {user.name}</div>
            <div> Email: {user.email}</div>
        </>
    )
}

export {
    User
}
