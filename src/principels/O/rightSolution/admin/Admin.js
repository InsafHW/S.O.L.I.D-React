import React from 'react'
import {User} from '../User'

function Admin({
    user
}) {

    return (
        <>
            <User user={user}/>
            <div> This is admin user details</div>
        </>
    )
}

export {
    Admin
}
