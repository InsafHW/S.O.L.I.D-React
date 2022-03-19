function UserDetails({
    user
}) {

    const showDetails = (user) => {
        alert(user.contact)
    }

    return (
        <div onClick={() => showDetails(user)}>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    )
}

export {
    UserDetails
}
