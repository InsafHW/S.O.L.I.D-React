/*
 в user - name, bankName и т.д., а в этой компоненте нужны только данные о пользователе
 */

function PersonDetails({
    user
}) {
    return (
        <>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.address}</div>
        </>
    )
}

export {
    PersonDetails
}
