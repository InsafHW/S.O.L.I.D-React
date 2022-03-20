function BankDetails({
    bankName,
    bankAccountNumber
}) {
    return (
        <>
            <div>{bankName}</div>
            <div>{bankAccountNumber}</div>
        </>
    )
}

export {
    BankDetails
}
