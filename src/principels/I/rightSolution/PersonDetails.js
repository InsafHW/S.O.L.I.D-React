function PersonDetails({
    name,
    age,
    address
}) {
    return (
        <>
            <div>{name}</div>
            <div>{age}</div>
            <div>{address}</div>
        </>
    )
}

export {
    PersonDetails
}
